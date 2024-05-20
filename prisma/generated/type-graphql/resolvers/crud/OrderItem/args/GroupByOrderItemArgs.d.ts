import { OrderItemOrderByWithAggregationInput } from "../../../inputs/OrderItemOrderByWithAggregationInput";
import { OrderItemScalarWhereWithAggregatesInput } from "../../../inputs/OrderItemScalarWhereWithAggregatesInput";
import { OrderItemWhereInput } from "../../../inputs/OrderItemWhereInput";
export declare class GroupByOrderItemArgs {
    where?: OrderItemWhereInput | undefined;
    orderBy?: OrderItemOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "deletedAt" | "updatedAt" | "amount" | "totalPrice" | "productId" | "orderId">;
    having?: OrderItemScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
