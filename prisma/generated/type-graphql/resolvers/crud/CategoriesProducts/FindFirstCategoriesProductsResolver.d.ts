import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCategoriesProductsArgs } from "./args/FindFirstCategoriesProductsArgs";
import { CategoriesProducts } from "../../../models/CategoriesProducts";
export declare class FindFirstCategoriesProductsResolver {
    findFirstCategoriesProducts(ctx: any, info: GraphQLResolveInfo, args: FindFirstCategoriesProductsArgs): Promise<CategoriesProducts | null>;
}
