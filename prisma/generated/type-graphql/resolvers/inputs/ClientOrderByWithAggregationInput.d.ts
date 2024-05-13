import { ClientCountOrderByAggregateInput } from "../inputs/ClientCountOrderByAggregateInput";
import { ClientMaxOrderByAggregateInput } from "../inputs/ClientMaxOrderByAggregateInput";
import { ClientMinOrderByAggregateInput } from "../inputs/ClientMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ClientOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    documentId?: "asc" | "desc" | undefined;
    addressId?: "asc" | "desc" | undefined;
    _count?: ClientCountOrderByAggregateInput | undefined;
    _max?: ClientMaxOrderByAggregateInput | undefined;
    _min?: ClientMinOrderByAggregateInput | undefined;
}
