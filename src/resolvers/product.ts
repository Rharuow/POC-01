import { PrismaClient } from "@prisma/client";
import { Query, Resolver } from "type-graphql";
import { Product } from "../../prisma/generated/type-graphql";

@Resolver()
export class ProductResolver {
  constructor(private prisma = new PrismaClient()) {}

  @Query((_types) => [Product])
  async getProducts() {}
}
