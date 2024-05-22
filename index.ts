import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "./prisma/generated/type-graphql";
import { ClienteResolver } from "./src/resolvers/client";
import { ProductResolver } from "./src/resolvers/product";
import { OrderResolver } from "./src/resolvers/order";

const prisma = new PrismaClient();

interface Context {
  p: PrismaClient;
}

async function main() {
  const schema = await buildSchema({
    resolvers: [...resolvers, ClienteResolver, ProductResolver, OrderResolver],
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    introspection: true,
    context: (): Context => ({ p: prisma }),
  });

  const { url } = await server.listen();

  console.log(`Server Running in ${url}`);
}

main();
