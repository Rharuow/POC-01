import { OrderAvgOrderByAggregateInput } from "../inputs/OrderAvgOrderByAggregateInput";
import { OrderCountOrderByAggregateInput } from "../inputs/OrderCountOrderByAggregateInput";
import { OrderMaxOrderByAggregateInput } from "../inputs/OrderMaxOrderByAggregateInput";
import { OrderMinOrderByAggregateInput } from "../inputs/OrderMinOrderByAggregateInput";
import { OrderSumOrderByAggregateInput } from "../inputs/OrderSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class OrderOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    amount?: "asc" | "desc" | undefined;
    totalPrice?: "asc" | "desc" | undefined;
    productId?: "asc" | "desc" | undefined;
    saleId?: "asc" | "desc" | undefined;
    _count?: OrderCountOrderByAggregateInput | undefined;
    _avg?: OrderAvgOrderByAggregateInput | undefined;
    _max?: OrderMaxOrderByAggregateInput | undefined;
    _min?: OrderMinOrderByAggregateInput | undefined;
    _sum?: OrderSumOrderByAggregateInput | undefined;
}
