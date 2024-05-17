import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCategoriesProductsOrThrowArgs } from "./args/FindUniqueCategoriesProductsOrThrowArgs";
import { CategoriesProducts } from "../../../models/CategoriesProducts";
export declare class FindUniqueCategoriesProductsOrThrowResolver {
    findUniqueCategoriesProductsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCategoriesProductsOrThrowArgs): Promise<CategoriesProducts | null>;
}
