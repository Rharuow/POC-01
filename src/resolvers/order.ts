import { Prisma, PrismaClient } from "@prisma/client";
import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { Order, OrderItem } from "../../prisma/generated/type-graphql";
import { CreateOrderItemInput } from "../inputs/CreateOrderItemInput";

@Resolver()
export class OrderResolver {
  constructor(private prisma = new PrismaClient()) {}

  @Query((_types) => [Order])
  async getOrders() {
    return await this.prisma.order.findMany();
  }

  @Query((_types) => Order)
  async getOrder(@Arg("id") id: string) {
    return await this.prisma.order.findUnique({
      where: { id },
    });
  }

  @Mutation((_types) => Order)
  async createOrder(
    @Arg("totalPrice") totalPrice: number,
    @Arg("clientId") clientId: string,
    @Arg("orderItems", (type) => [CreateOrderItemInput])
    orderItems: Array<CreateOrderItemInput>
  ) {
    return this.prisma.order.create({
      data: {
        totalPrice,
        client: {
          connect: {
            id: clientId,
          },
        },
        orderItems: {
          createMany: {
            data: orderItems.map((orderItem) => ({
              productId: orderItem.productId,
              totalPrice: orderItem.totalPrice,
              amount: orderItem.amount,
            })),
          },
        },
      },
    });
  }

  @Mutation((_types) => Order)
  async updateOrder(
    @Arg("id") id: string,
    @Arg("totalPrice") totalPrice: number,
    @Arg("clientId") clientId: string,
    @Arg("orderItems", (type) => [CreateOrderItemInput])
    orderItems: Array<CreateOrderItemInput>
  ) {
    return this.prisma.order.update({
      data: {
        totalPrice,
        client: {
          connect: {
            id: clientId,
          },
        },
        orderItems: {
          deleteMany: {
            orderId: id,
          },
          createMany: {
            data: orderItems.map((orderItem) => ({
              productId: orderItem.productId,
              totalPrice: orderItem.totalPrice,
              amount: orderItem.amount,
            })),
          },
        },
      },
      where: {
        id,
      },
    });
  }

  @Mutation((_types) => ID)
  async deleteOrder(@Arg("id") id: string) {
    return (
      await this.prisma.order.delete({
        where: {
          id,
        },
      })
    ).id;
  }
}
