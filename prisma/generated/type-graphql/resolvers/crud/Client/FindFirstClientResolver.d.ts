import type { GraphQLResolveInfo } from "graphql";
import { FindFirstClientArgs } from "./args/FindFirstClientArgs";
import { Client } from "../../../models/Client";
export declare class FindFirstClientResolver {
    findFirstClient(ctx: any, info: GraphQLResolveInfo, args: FindFirstClientArgs): Promise<Client | null>;
}
