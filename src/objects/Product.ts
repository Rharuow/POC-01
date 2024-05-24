import { Field, ObjectType } from "type-graphql";
import {
  Product,
  CategoriesProducts,
} from "../../prisma/generated/type-graphql";

@ObjectType()
export class GetProduct
  implements Partial<Product & { categories: Array<CategoriesProducts> }>
{
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  inventory_quantity: number;

  @Field((_type) => [CategoriesProducts])
  categories: Array<CategoriesProducts>;
}
