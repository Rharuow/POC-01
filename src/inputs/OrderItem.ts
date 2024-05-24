import { Field, ObjectType } from "type-graphql";
import { Order, OrderItem, Product } from "../../prisma/generated/type-graphql";
import { GetProduct } from "./Product";

@ObjectType()
export class GetOrderItem implements Partial<OrderItem> {
  @Field()
  id: string;

  @Field()
  amount: number;

  @Field()
  totalPrice: number;

  @Field((_type) => GetProduct)
  product: Product;
}
