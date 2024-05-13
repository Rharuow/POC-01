import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueClientArgs } from "./args/FindUniqueClientArgs";
import { Client } from "../../../models/Client";
export declare class FindUniqueClientResolver {
    client(ctx: any, info: GraphQLResolveInfo, args: FindUniqueClientArgs): Promise<Client | null>;
}
