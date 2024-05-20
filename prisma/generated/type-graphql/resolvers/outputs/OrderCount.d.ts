import { OrderCountOrderItemsArgs } from "./args/OrderCountOrderItemsArgs";
export declare class OrderCount {
    orderItems: number;
    getOrderItems(root: OrderCount, args: OrderCountOrderItemsArgs): number;
}
