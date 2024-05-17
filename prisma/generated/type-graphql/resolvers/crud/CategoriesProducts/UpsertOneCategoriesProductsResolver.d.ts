import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCategoriesProductsArgs } from "./args/UpsertOneCategoriesProductsArgs";
import { CategoriesProducts } from "../../../models/CategoriesProducts";
export declare class UpsertOneCategoriesProductsResolver {
    upsertOneCategoriesProducts(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCategoriesProductsArgs): Promise<CategoriesProducts>;
}
