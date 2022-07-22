import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresaService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createEmpresaDto: CreateEmpresaDto) {
    const data: Prisma.EmpresaCreateInput = {
      ...createEmpresaDto,
    };

    const empresa = await this.prisma.empresa.findFirst({
      where: { cnpj: data.cnpj },
    });

    if (empresa) {
      throw new Error('CNPJ já cadastrado');
    }

    return await this.prisma.empresa.create({ data });
  }
  async findAll() {
    return await this.prisma.empresa.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.empresa.findFirst({ where: { id } });
  }

  async update(id: string, updateEmpresaDto: UpdateEmpresaDto) {
    const data: Prisma.EmpresaUpdateInput = {
      id: id,
      ...updateEmpresaDto,
    };

    return await this.prisma.empresa.update({ where: { id: id }, data });
  }

  async remove(id: string) {
    return await this.prisma.empresa.delete({ where: { id } });
  }
}
