import { Field, ID, ObjectType } from "type-graphql";

import { Document } from "./Document";
import { Address } from "./Address";

@ObjectType()
export class Client {
  @Field((_type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field((_type) => Document)
  document: Document;

  @Field((_type) => Address)
  address: Address;
}
