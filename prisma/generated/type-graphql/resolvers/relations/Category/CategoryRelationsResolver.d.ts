import type { GraphQLResolveInfo } from "graphql";
import { Category } from "../../../models/Category";
import { Product } from "../../../models/Product";
import { CategoryProdutosArgs } from "./args/CategoryProdutosArgs";
export declare class CategoryRelationsResolver {
    produtos(category: Category, ctx: any, info: GraphQLResolveInfo, args: CategoryProdutosArgs): Promise<Product[]>;
}
