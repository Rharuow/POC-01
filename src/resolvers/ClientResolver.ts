import crypto from "crypto";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Client } from "../models/Clients";
import { DocumentResolver } from "./DocumentResolver";

@Resolver()
export class ClientResolver {
  private data: Array<Client> = [];

  constructor(private documentResolver: DocumentResolver) {}

  @Query(() => [Client])
  async getClients() {
    return this.data;
  }

  @Mutation(() => Client)
  async createClients(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("cpf") cpf: string,
    @Arg("cnpj") cnpj: string,
    @Arg("billing") billing: string,
    @Arg("delivery") delivery: string
  ) {
    try {
      const document = await this.documentResolver.createDocument(cpf, cnpj);

      const client = {
        id: crypto.randomUUID(),
        name,
        email,
        document,
        address: { id: crypto.randomUUID(), billing, delivery },
      };

      this.data.push(client);

      return client;
    } catch (error) {
      throw error;
    }
  }
}
