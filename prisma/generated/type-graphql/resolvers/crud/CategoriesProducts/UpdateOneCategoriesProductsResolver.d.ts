import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCategoriesProductsArgs } from "./args/UpdateOneCategoriesProductsArgs";
import { CategoriesProducts } from "../../../models/CategoriesProducts";
export declare class UpdateOneCategoriesProductsResolver {
    updateOneCategoriesProducts(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCategoriesProductsArgs): Promise<CategoriesProducts | null>;
}
