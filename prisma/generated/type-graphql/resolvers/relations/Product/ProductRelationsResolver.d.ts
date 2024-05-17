import type { GraphQLResolveInfo } from "graphql";
import { CategoriesProducts } from "../../../models/CategoriesProducts";
import { Order } from "../../../models/Order";
import { Product } from "../../../models/Product";
import { ProductCategoriesArgs } from "./args/ProductCategoriesArgs";
import { ProductOrdersArgs } from "./args/ProductOrdersArgs";
export declare class ProductRelationsResolver {
    categories(product: Product, ctx: any, info: GraphQLResolveInfo, args: ProductCategoriesArgs): Promise<CategoriesProducts[]>;
    orders(product: Product, ctx: any, info: GraphQLResolveInfo, args: ProductOrdersArgs): Promise<Order[]>;
}
