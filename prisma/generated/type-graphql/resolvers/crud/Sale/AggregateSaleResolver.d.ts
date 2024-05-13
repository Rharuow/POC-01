import type { GraphQLResolveInfo } from "graphql";
import { AggregateSaleArgs } from "./args/AggregateSaleArgs";
import { AggregateSale } from "../../outputs/AggregateSale";
export declare class AggregateSaleResolver {
    aggregateSale(ctx: any, info: GraphQLResolveInfo, args: AggregateSaleArgs): Promise<AggregateSale>;
}
