import type { GraphQLResolveInfo } from "graphql";
import { FindManyCategoriesProductsArgs } from "./args/FindManyCategoriesProductsArgs";
import { CategoriesProducts } from "../../../models/CategoriesProducts";
export declare class FindManyCategoriesProductsResolver {
    findManyCategoriesProducts(ctx: any, info: GraphQLResolveInfo, args: FindManyCategoriesProductsArgs): Promise<CategoriesProducts[]>;
}
