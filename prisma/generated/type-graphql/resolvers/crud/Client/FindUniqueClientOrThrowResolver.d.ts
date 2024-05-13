import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueClientOrThrowArgs } from "./args/FindUniqueClientOrThrowArgs";
import { Client } from "../../../models/Client";
export declare class FindUniqueClientOrThrowResolver {
    getClient(ctx: any, info: GraphQLResolveInfo, args: FindUniqueClientOrThrowArgs): Promise<Client | null>;
}
