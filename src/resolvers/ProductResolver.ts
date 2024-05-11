import crypto from "crypto";

import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Product } from "../models/Product";
import { CategoryResolver } from "./CategoryResolver";

@Resolver()
export class ProductResolver {
  private data: Array<Product> = [];

  constructor(private categoryResolver: CategoryResolver) {}

  @Query(() => [Product])
  async getProducts() {
    return this.data;
  }

  @Query(() => Product)
  async getProduct(@Arg("id") id: string) {
    return this.data.find((product) => product.id === id);
  }

  @Mutation(() => Product)
  async createProduct(
    @Arg("amount") amount: number,
    @Arg("name") name: string,
    @Arg("categoryName") categoryName: string,
    @Arg("description") description: string,
    @Arg("price") price: number
  ) {
    let category = await this.categoryResolver.getCategoryByName(categoryName);

    if (category === undefined)
      category = await this.categoryResolver.createCategory(categoryName);

    const product = {
      id: crypto.randomUUID(),
      amount,
      description,
      price,
      name,
      category,
    };

    this.data.push(product);

    return product;
  }
}
