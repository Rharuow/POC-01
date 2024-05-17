import type { GraphQLResolveInfo } from "graphql";
import { CategoriesProducts } from "../../../models/CategoriesProducts";
import { Category } from "../../../models/Category";
import { CategoryProdutosArgs } from "./args/CategoryProdutosArgs";
export declare class CategoryRelationsResolver {
    produtos(category: Category, ctx: any, info: GraphQLResolveInfo, args: CategoryProdutosArgs): Promise<CategoriesProducts[]>;
}
