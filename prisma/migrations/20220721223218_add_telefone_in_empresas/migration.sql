/*
  Warnings:

  - Added the required column `telefone` to the `empresas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "empresas" ADD COLUMN     "telefone" TEXT NOT NULL;
