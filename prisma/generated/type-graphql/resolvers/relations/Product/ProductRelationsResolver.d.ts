import type { GraphQLResolveInfo } from "graphql";
import { CategoriesProducts } from "../../../models/CategoriesProducts";
import { OrderItem } from "../../../models/OrderItem";
import { Product } from "../../../models/Product";
import { ProductCategoriesArgs } from "./args/ProductCategoriesArgs";
import { ProductOrderItemsArgs } from "./args/ProductOrderItemsArgs";
export declare class ProductRelationsResolver {
    categories(product: Product, ctx: any, info: GraphQLResolveInfo, args: ProductCategoriesArgs): Promise<CategoriesProducts[]>;
    orderItems(product: Product, ctx: any, info: GraphQLResolveInfo, args: ProductOrderItemsArgs): Promise<OrderItem[]>;
}
