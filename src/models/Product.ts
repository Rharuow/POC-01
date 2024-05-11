import { Field, ID, ObjectType } from "type-graphql";
import { Category } from "./Category";

@ObjectType()
export class Product {
  @Field((_type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  amount: number;

  @Field()
  category: Category;
}
