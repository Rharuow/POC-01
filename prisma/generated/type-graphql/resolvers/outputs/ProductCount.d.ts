import { ProductCountCategoriesArgs } from "./args/ProductCountCategoriesArgs";
import { ProductCountOrdersArgs } from "./args/ProductCountOrdersArgs";
export declare class ProductCount {
    categories: number;
    orders: number;
    getCategories(root: ProductCount, args: ProductCountCategoriesArgs): number;
    getOrders(root: ProductCount, args: ProductCountOrdersArgs): number;
}
