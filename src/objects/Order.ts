import { Field, ObjectType } from "type-graphql";
import { Client, Order, OrderItem } from "../../prisma/generated/type-graphql";
import { GetClient } from "./Client";
import { GetOrderItem } from "./OrderItem";

@ObjectType()
export class GetOrder implements Partial<Order> {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  totalPrice: number;

  @Field((_types) => GetClient)
  client: Client;

  @Field((_types) => [GetOrderItem])
  orderItems?: Array<OrderItem>;
}
