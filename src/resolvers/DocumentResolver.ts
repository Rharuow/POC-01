import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Document } from "../../prisma/generated/type-graphql";
import { prisma } from "../../prisma";

@Resolver()
export class DocumentResolver {
  @Query((_type) => [Document])
  async getDocuments() {
    const documents = await prisma.document.findMany();
    return documents;
  }

  @Query((_type) => Document)
  async getDocument(@Arg("id") id: string) {
    const document = await prisma.document.findUniqueOrThrow({
      where: { id },
    });

    return document;
  }

  @Query((_type) => Document)
  async getDocumentByCpf(@Arg("cpf", { nullable: true }) cpf?: string) {
    const document = await prisma.document.findUniqueOrThrow({
      where: { cpf },
    });

    return document;
  }

  @Query((_type) => Document)
  async getDocumentByCnpj(@Arg("cnpj", { nullable: true }) cnpj?: string) {
    const document = await prisma.document.findUniqueOrThrow({
      where: { cnpj },
    });

    return document;
  }

  @Mutation((_type) => Document)
  async createDocument(
    @Arg("cpf", { nullable: true }) cpf?: string,
    @Arg("cnpj", { nullable: true }) cnpj?: string
  ) {
    try {
      let document = cpf
        ? await this.getDocumentByCpf(cpf)
        : await this.getDocumentByCnpj(cnpj);
      if (document) throw new Error("Document already exists");

      document = await prisma.document.create({
        data: {
          cnpj: cnpj || null,
          cpf: cpf || null,
        },
      });

      return document;
    } catch (error) {
      throw error;
    }
  }
}
