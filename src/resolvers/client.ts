import { PrismaClient } from "@prisma/client";
import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
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

  @Mutation((_types) => Client)
  async updateClient(
    @Arg("id") id: string,
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("billing") billing: string,
    @Arg("delivery") delivery: string,
    @Arg("cpf") cpf?: string,
    @Arg("cnpj") cnpj?: string
  ) {
    try {
      return await this.prisma.client.update({
        data: {
          email: { set: email },
          name: { set: name },
          address: {
            update: {
              billing: { set: billing },
              delivery: { set: delivery },
            },
          },
          document: {
            update: {
              ...(cpf && { cpf: { set: cpf } }),
              ...(cnpj && { cnpj: { set: cnpj } }),
            },
          },
        },
        where: {
          id,
        },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Mutation((_types) => ID)
  async deleteClient(@Arg("id") id: string) {
    try {
      return (
        await this.prisma.client.delete({
          where: {
            id,
          },
          select: {
            id: true,
          },
        })
      ).id;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
