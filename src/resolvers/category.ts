import { Query, Resolver } from "type-graphql";
import { Category } from "../../prisma/generated/type-graphql";
import { PrismaClient } from "@prisma/client";

@Resolver()
export class CategoryResolver {
  constructor(private prisma = new PrismaClient()) {}

  @Query((_types) => [Category])
  async getCategories() {
    return await this.prisma.category.findMany();
  }
}
