import { CategoryCountOrderByAggregateInput } from "../inputs/CategoryCountOrderByAggregateInput";
import { CategoryMaxOrderByAggregateInput } from "../inputs/CategoryMaxOrderByAggregateInput";
import { CategoryMinOrderByAggregateInput } from "../inputs/CategoryMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class CategoryOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    _count?: CategoryCountOrderByAggregateInput | undefined;
    _max?: CategoryMaxOrderByAggregateInput | undefined;
    _min?: CategoryMinOrderByAggregateInput | undefined;
}
