import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { DocumentResolver } from "./DocumentResolver";
import { AddressResolver } from "./AddressResolver";
import { Client } from "../../prisma/generated/type-graphql";
import { prisma } from "../../prisma";

@Resolver()
export class ClientResolver {
  constructor(
    private documentResolver: DocumentResolver = new DocumentResolver(),
    private addressResolver: AddressResolver = new AddressResolver()
  ) {}

  @Query(() => [Client])
  async getClients() {
    return await prisma.client.findMany();
  }

  // @Query(() => Client)
  // async getClient(@Arg("id") id: string) {
  //   return await prisma.client.findUniqueOrThrow({ where: { id } });
  // }

  @Mutation(() => Client)
  async createClients(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("cpf", { nullable: true }) cpf?: string,
    @Arg("cnpj", { nullable: true }) cnpj?: string,
    @Arg("billing", { nullable: true }) billing?: string,
    @Arg("delivery", { nullable: true }) delivery?: string
  ) {
    try {
      const document = await this.documentResolver.createDocument(cpf, cnpj);
      const address = await this.addressResolver.createAddress(
        billing,
        delivery
      );

      const client = await prisma.client.create({
        data: { email, name, addressId: address.id, documentId: document.id },
      });

      return client;
    } catch (error) {
      throw error;
    }
  }
}
