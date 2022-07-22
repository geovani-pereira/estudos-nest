import { IsString, Matches, MaxLength } from 'class-validator';

export class CreateEmpresaDto {
  @IsString()
  name: string;

  @IsString()
  @MaxLength(14)
  @Matches(
    /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
    {
      message: 'CNPJ inválido',
    },
  )
  cnpj: string;

  @IsString()
  telefone: string;
}
