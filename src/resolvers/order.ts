import { PrismaClient } from "@prisma/client";
import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { CreateOrderItemInput } from "../inputs/CreateOrderItemInput";
import { GetOrder } from "../inputs/Order";

@Resolver()
export class OrderResolver {
  constructor(private prisma = new PrismaClient()) {}

  @Query((_types) => [GetOrder])
  async getOrders() {
    console.log(
      await this.prisma.order.findMany({
        include: {
          client: {
            include: {
              address: true,
              document: true,
            },
          },
          orderItems: {
            include: {
              product: true,
            },
          },
        },
      })
    );

    return await this.prisma.order.findMany({
      include: {
        client: {
          include: {
            address: true,
            document: true,
          },
        },
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  @Query((_types) => GetOrder)
  async getOrder(@Arg("id") id: string) {
    return await this.prisma.order.findUnique({
      where: { id },
      include: {
        client: {
          include: {
            address: true,
            document: true,
          },
        },
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  @Mutation((_types) => GetOrder)
  async createOrder(
    @Arg("totalPrice") totalPrice: number,
    @Arg("clientId") clientId: string,
    @Arg("orderItems", (type) => [CreateOrderItemInput])
    orderItems: Array<CreateOrderItemInput>
  ) {
    return await this.prisma.order.create({
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
      include: {
        client: {
          include: {
            address: true,
            document: true,
          },
        },
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  @Mutation((_types) => GetOrder)
  async updateOrder(
    @Arg("id") id: string,
    @Arg("totalPrice") totalPrice: number,
    @Arg("clientId") clientId: string,
    @Arg("orderItems", (_type) => [CreateOrderItemInput])
    orderItems: Array<CreateOrderItemInput>
  ) {
    return await this.prisma.order.update({
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
      include: {
        client: {
          include: {
            address: true,
            document: true,
          },
        },
        orderItems: {
          include: {
            product: true,
          },
        },
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
