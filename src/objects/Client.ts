import { Field, ObjectType } from "type-graphql";
import { Address, Client, Document } from "../../prisma/generated/type-graphql";

@ObjectType()
export class GetClient
  implements Partial<Client & { address: Address } & { document: Document }>
{
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  document: Document;

  @Field()
  address: Address;
}
