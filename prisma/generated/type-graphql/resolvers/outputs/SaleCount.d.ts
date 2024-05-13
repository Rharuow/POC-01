import { SaleCountOrdersArgs } from "./args/SaleCountOrdersArgs";
export declare class SaleCount {
    orders: number;
    getOrders(root: SaleCount, args: SaleCountOrdersArgs): number;
}
