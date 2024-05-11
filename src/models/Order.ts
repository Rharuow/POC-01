import { Field, ID, ObjectType } from "type-graphql";
import { Product } from "./Product";

@ObjectType()
export class Order {
  @Field((_type) => ID)
  id: string;

  @Field()
  amount: number;

  @Field()
  total: number;

  @Field((_type) => Product)
  product: Product;
}
