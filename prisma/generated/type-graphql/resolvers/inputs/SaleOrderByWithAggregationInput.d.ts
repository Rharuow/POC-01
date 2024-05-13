import { SaleAvgOrderByAggregateInput } from "../inputs/SaleAvgOrderByAggregateInput";
import { SaleCountOrderByAggregateInput } from "../inputs/SaleCountOrderByAggregateInput";
import { SaleMaxOrderByAggregateInput } from "../inputs/SaleMaxOrderByAggregateInput";
import { SaleMinOrderByAggregateInput } from "../inputs/SaleMinOrderByAggregateInput";
import { SaleSumOrderByAggregateInput } from "../inputs/SaleSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class SaleOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    totalPrice?: "asc" | "desc" | undefined;
    clientId?: "asc" | "desc" | undefined;
    _count?: SaleCountOrderByAggregateInput | undefined;
    _avg?: SaleAvgOrderByAggregateInput | undefined;
    _max?: SaleMaxOrderByAggregateInput | undefined;
    _min?: SaleMinOrderByAggregateInput | undefined;
    _sum?: SaleSumOrderByAggregateInput | undefined;
}
