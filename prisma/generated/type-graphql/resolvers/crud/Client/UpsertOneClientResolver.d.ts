import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneClientArgs } from "./args/UpsertOneClientArgs";
import { Client } from "../../../models/Client";
export declare class UpsertOneClientResolver {
    upsertOneClient(ctx: any, info: GraphQLResolveInfo, args: UpsertOneClientArgs): Promise<Client>;
}
