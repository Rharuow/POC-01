import type { GraphQLResolveInfo } from "graphql";
import { AggregateCategoriesProductsArgs } from "./args/AggregateCategoriesProductsArgs";
import { AggregateCategoriesProducts } from "../../outputs/AggregateCategoriesProducts";
export declare class AggregateCategoriesProductsResolver {
    aggregateCategoriesProducts(ctx: any, info: GraphQLResolveInfo, args: AggregateCategoriesProductsArgs): Promise<AggregateCategoriesProducts>;
}
