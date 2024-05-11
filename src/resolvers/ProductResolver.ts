import crypto from "crypto";

import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Product } from "../models/Product";

@Resolver()
export class ProductResolver {
  private data: Array<Product> = [];

  @Query(() => [Product])
  async getProducts() {
    return this.data;
  }

  @Mutation(() => Product)
  async createProduct(
    @Arg("amount") amount: number,
    @Arg("name") name: string,
    @Arg("categoryName") categoryName: string,
    @Arg("description") description: string,
    @Arg("price") price: number
  ) {
    const product: Product = {
      id: crypto.randomUUID(),
      amount,
      description,
      price,
      name,
      category: {
        id: crypto.randomUUID(),
        name: categoryName,
      },
    };

    this.data.push(product);

    return product;
  }
}
