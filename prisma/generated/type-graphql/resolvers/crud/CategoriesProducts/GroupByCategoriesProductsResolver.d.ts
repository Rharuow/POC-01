import type { GraphQLResolveInfo } from "graphql";
import { GroupByCategoriesProductsArgs } from "./args/GroupByCategoriesProductsArgs";
import { CategoriesProductsGroupBy } from "../../outputs/CategoriesProductsGroupBy";
export declare class GroupByCategoriesProductsResolver {
    groupByCategoriesProducts(ctx: any, info: GraphQLResolveInfo, args: GroupByCategoriesProductsArgs): Promise<CategoriesProductsGroupBy[]>;
}
