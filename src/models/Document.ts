import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Document {
  @Field((_type) => ID)
  id: string;

  @Field()
  cpf: string;

  @Field()
  cnpj: string;
}
