import type { GraphQLResolveInfo } from "graphql";
import { FindManyClientArgs } from "./args/FindManyClientArgs";
import { Client } from "../../../models/Client";
export declare class FindManyClientResolver {
    clients(ctx: any, info: GraphQLResolveInfo, args: FindManyClientArgs): Promise<Client[]>;
}
