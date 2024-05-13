import type { GraphQLResolveInfo } from "graphql";
import { FindFirstClientOrThrowArgs } from "./args/FindFirstClientOrThrowArgs";
import { Client } from "../../../models/Client";
export declare class FindFirstClientOrThrowResolver {
    findFirstClientOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstClientOrThrowArgs): Promise<Client | null>;
}
