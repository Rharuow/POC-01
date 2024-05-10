import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Address {
  @Field((_type) => ID)
  id: string;

  @Field()
  billing: string;

  @Field()
  delivery: string;
}
