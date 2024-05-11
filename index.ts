import "reflect-metadata";
import path from "path";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { ClientResolver } from "./src/resolvers/ClientResolver";
import { OrderResolver } from "./src/resolvers/OrderResolver";
import { ProductResolver } from "./src/resolvers/ProductResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [ClientResolver, OrderResolver, ProductResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen();

  console.log(`Server Running in ${url}`);
}

main();
