import type { GraphQLResolveInfo } from "graphql";
import { CategoriesProducts } from "../../../models/CategoriesProducts";
import { Category } from "../../../models/Category";
import { Product } from "../../../models/Product";
export declare class CategoriesProductsRelationsResolver {
    category(categoriesProducts: CategoriesProducts, ctx: any, info: GraphQLResolveInfo): Promise<Category>;
    product(categoriesProducts: CategoriesProducts, ctx: any, info: GraphQLResolveInfo): Promise<Product>;
}
