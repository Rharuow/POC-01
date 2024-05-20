import { OrderItemAvgOrderByAggregateInput } from "../inputs/OrderItemAvgOrderByAggregateInput";
import { OrderItemCountOrderByAggregateInput } from "../inputs/OrderItemCountOrderByAggregateInput";
import { OrderItemMaxOrderByAggregateInput } from "../inputs/OrderItemMaxOrderByAggregateInput";
import { OrderItemMinOrderByAggregateInput } from "../inputs/OrderItemMinOrderByAggregateInput";
import { OrderItemSumOrderByAggregateInput } from "../inputs/OrderItemSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class OrderItemOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    amount?: "asc" | "desc" | undefined;
    totalPrice?: "asc" | "desc" | undefined;
    productId?: "asc" | "desc" | undefined;
    orderId?: "asc" | "desc" | undefined;
    _count?: OrderItemCountOrderByAggregateInput | undefined;
    _avg?: OrderItemAvgOrderByAggregateInput | undefined;
    _max?: OrderItemMaxOrderByAggregateInput | undefined;
    _min?: OrderItemMinOrderByAggregateInput | undefined;
    _sum?: OrderItemSumOrderByAggregateInput | undefined;
}
