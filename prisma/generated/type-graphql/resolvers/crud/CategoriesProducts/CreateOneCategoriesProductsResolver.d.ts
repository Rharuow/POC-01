import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCategoriesProductsArgs } from "./args/CreateOneCategoriesProductsArgs";
import { CategoriesProducts } from "../../../models/CategoriesProducts";
export declare class CreateOneCategoriesProductsResolver {
    createOneCategoriesProducts(ctx: any, info: GraphQLResolveInfo, args: CreateOneCategoriesProductsArgs): Promise<CategoriesProducts>;
}
