import { PrismaClient } from "@prisma/client";
import { Arg, Args, ID, Mutation, Query, Resolver } from "type-graphql";
import { GetProduct } from "../objects/Product";

@Resolver()
export class ProductResolver {
  constructor(private prisma = new PrismaClient()) {}

  @Query((_types) => [GetProduct])
  async getProducts() {
    return await this.prisma.product.findMany({
      include: { categories: true },
    });
  }

  @Query((_types) => GetProduct)
  async getProduct(@Arg("id") id: string) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
      include: { categories: true },
    });
  }

  @Mutation((_types) => GetProduct)
  async createProduct(
    @Arg("name") name: string,
    @Arg("price") price: number,
    @Arg("description") description: string,
    @Arg("inventory_quantity") inventory_quantity: number,
    @Arg("categories", (type) => [String]) categories: Array<string>
  ) {
    return await this.prisma.product.create({
      data: {
        name,
        description,
        inventory_quantity,
        price,
        categories: {
          createMany: {
            data: categories.map((category) => ({ categoryName: category })),
            skipDuplicates: true,
          },
        },
      },
      include: {
        categories: true,
      },
    });
  }

  @Mutation((_types) => ID)
  async deleteProduct(@Arg("id") id: string) {
    return (
      await this.prisma.product.delete({
        where: {
          id,
        },
        select: {
          id: true,
        },
      })
    ).id;
  }

  @Mutation((_types) => GetProduct)
  async updateProduct(
    @Arg("name") name: string,
    @Arg("price") price: number,
    @Arg("description") description: string,
    @Arg("inventory_quantity") inventory_quantity: number,
    @Arg("categories", (type) => [String]) categories: Array<string>,
    @Arg("id") id: string
  ) {
    return await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        name: { set: name },
        price: { set: price },
        description: { set: description },
        inventory_quantity: { set: inventory_quantity },
        categories: {
          deleteMany: {
            productId: id,
          },
          createMany: {
            data: categories.map((category) => ({ categoryName: category })),
            skipDuplicates: true,
          },
        },
      },
      include: { categories: true },
    });
  }
}
