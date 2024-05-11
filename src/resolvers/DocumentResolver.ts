import crypto from "crypto";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Document } from "../models/Document";

@Resolver()
export class DocumentResolver {
  private data: Array<Document> = [];

  @Query()
  async getDocuments() {
    return this.data;
  }

  @Query()
  async getDocument(@Arg("id") id: string) {
    return this.data.find((document) => document.id === id);
  }

  @Query()
  async getDocumentByCpf(@Arg("cpf") cpf: string) {
    return this.data.find((document) => document.cpf === cpf);
  }

  @Query()
  async getDocumentByCnpj(@Arg("cnpj") cnpj: string) {
    return this.data.find((document) => document.cnpj === cnpj);
  }

  @Mutation((_type) => Document)
  async createDocument(
    @Arg("cpf", { nullable: true }) cpf: string,
    @Arg("cnpj", { nullable: true }) cnpj: string
  ) {
    try {
      let document = cpf
        ? await this.getDocumentByCpf(cpf)
        : await this.getDocumentByCnpj(cnpj);
      if (document) throw new Error("Document already exists");

      document = { id: crypto.randomUUID(), cnpj, cpf };

      this.data.push(document);

      return document;
    } catch (error) {
      throw error;
    }
  }
}
