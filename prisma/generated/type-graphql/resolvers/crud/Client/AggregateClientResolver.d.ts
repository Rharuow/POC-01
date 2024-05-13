import type { GraphQLResolveInfo } from "graphql";
import { AggregateClientArgs } from "./args/AggregateClientArgs";
import { AggregateClient } from "../../outputs/AggregateClient";
export declare class AggregateClientResolver {
    aggregateClient(ctx: any, info: GraphQLResolveInfo, args: AggregateClientArgs): Promise<AggregateClient>;
}
