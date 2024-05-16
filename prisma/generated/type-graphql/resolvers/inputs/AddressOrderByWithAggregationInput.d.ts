import { AddressCountOrderByAggregateInput } from "../inputs/AddressCountOrderByAggregateInput";
import { AddressMaxOrderByAggregateInput } from "../inputs/AddressMaxOrderByAggregateInput";
import { AddressMinOrderByAggregateInput } from "../inputs/AddressMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class AddressOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: SortOrderInput | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: SortOrderInput | undefined;
    billing?: SortOrderInput | undefined;
    delivery?: SortOrderInput | undefined;
    clientId?: "asc" | "desc" | undefined;
    _count?: AddressCountOrderByAggregateInput | undefined;
    _max?: AddressMaxOrderByAggregateInput | undefined;
    _min?: AddressMinOrderByAggregateInput | undefined;
}
