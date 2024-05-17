import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCategoriesProductsOrThrowArgs } from "./args/FindFirstCategoriesProductsOrThrowArgs";
import { CategoriesProducts } from "../../../models/CategoriesProducts";
export declare class FindFirstCategoriesProductsOrThrowResolver {
    findFirstCategoriesProductsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCategoriesProductsOrThrowArgs): Promise<CategoriesProducts | null>;
}
