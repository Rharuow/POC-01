import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCategoriesProductsArgs } from "./args/DeleteOneCategoriesProductsArgs";
import { CategoriesProducts } from "../../../models/CategoriesProducts";
export declare class DeleteOneCategoriesProductsResolver {
    deleteOneCategoriesProducts(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCategoriesProductsArgs): Promise<CategoriesProducts | null>;
}
