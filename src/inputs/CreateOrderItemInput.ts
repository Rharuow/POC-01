import { Field, InputType } from "type-graphql";
import { OrderItem } from "../../prisma/generated/type-graphql";

@InputType()
export class CreateOrderItemInput implements Partial<OrderItem> {
  @Field()
  productId: string;

  @Field()
  totalPrice: number;

  @Field()
  amount: number;
}
