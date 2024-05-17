import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCategoriesProductsArgs } from "./args/FindUniqueCategoriesProductsArgs";
import { CategoriesProducts } from "../../../models/CategoriesProducts";
export declare class FindUniqueCategoriesProductsResolver {
    findUniqueCategoriesProducts(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCategoriesProductsArgs): Promise<CategoriesProducts | null>;
}
