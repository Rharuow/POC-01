import { ProductCountCategoriesArgs } from "./args/ProductCountCategoriesArgs";
import { ProductCountOrderItemsArgs } from "./args/ProductCountOrderItemsArgs";
export declare class ProductCount {
    categories: number;
    orderItems: number;
    getCategories(root: ProductCount, args: ProductCountCategoriesArgs): number;
    getOrderItems(root: ProductCount, args: ProductCountOrderItemsArgs): number;
}
