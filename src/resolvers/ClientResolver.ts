import crypto from "crypto";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Client } from "../models/Clients";

@Resolver()
export class ClientResolver {
  private data: Array<Client> = [];

  @Query(() => [Client])
  async clients() {
    return this.data;
  }

  @Mutation(() => Client)
  async createClients(@Arg("name") name: string) {
    const client = { id: crypto.randomUUID(), name };

    this.data.push(client);

    return client;
  }
}
