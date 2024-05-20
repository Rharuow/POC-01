import { PrismaClient } from "@prisma/client";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Address, Client } from "../../prisma/generated/type-graphql";

@Resolver()
export class ClienteResolver {
  constructor(private prisma = new PrismaClient()) {}

  @Query((_types) => [Client])
  async clients() {
    return await this.prisma.client.findMany();
  }

  @Query((_types) => Client)
  async client(@Arg("id") id: string) {
    return await this.prisma.client.findUnique({
      where: { id },
    });
  }

  @Mutation((_types) => Client)
  async createClient(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("billing") billing: string,
    @Arg("delivery") delivery: string,
    @Arg("cpf") cpf?: string,
    @Arg("cnpj") cnpj?: string
  ) {
    try {
      return await this.prisma.client.create({
        data: {
          email,
          name,
          document: {
            create: {
              ...(cpf ? { cpf } : { cnpj }),
            },
          },
          address: {
            create: {
              billing,
              delivery,
            },
          },
        },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
