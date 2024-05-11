import crypto from "crypto";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Order } from "../models/Order";
import { Category } from "../models/Category";
import { ProductResolver } from "./ProductResolver";
import { Product } from "../models/Product";

@Resolver()
export class OrderResolver {
  private data: Array<Order> = [];

  constructor(private productResolver: ProductResolver) {}

  @Query()
  async getOrders() {
    return this.data;
  }

  @Mutation()
  async createOrders(
    @Arg("amount") amount: number,
    @Arg("total") total: number,
    @Arg("productId") productId: string
  ) {
    try {
      const product = await this.productResolver.getProduct(productId);
      if (product === undefined) throw new Error("product not found");
      const order: Order = {
        id: crypto.randomUUID(),
        amount,
        total,
        product,
      };

      this.data.push(order);

      return order;
    } catch (error) {
      // Check if the error is a string before throwing it
      if (typeof error === "string") {
        throw new Error(error);
      }
      // If error is not a string, rethrow it as is
      throw error;
    }
  }
}
