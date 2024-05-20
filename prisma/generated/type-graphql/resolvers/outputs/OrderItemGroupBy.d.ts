import { OrderItemAvgAggregate } from "../outputs/OrderItemAvgAggregate";
import { OrderItemCountAggregate } from "../outputs/OrderItemCountAggregate";
import { OrderItemMaxAggregate } from "../outputs/OrderItemMaxAggregate";
import { OrderItemMinAggregate } from "../outputs/OrderItemMinAggregate";
import { OrderItemSumAggregate } from "../outputs/OrderItemSumAggregate";
export declare class OrderItemGroupBy {
    id: string;
    createdAt: Date;
    deletedAt: Date | null;
    updatedAt: Date;
    amount: number;
    totalPrice: number;
    productId: string;
    orderId: string;
    _count: OrderItemCountAggregate | null;
    _avg: OrderItemAvgAggregate | null;
    _sum: OrderItemSumAggregate | null;
    _min: OrderItemMinAggregate | null;
    _max: OrderItemMaxAggregate | null;
}
