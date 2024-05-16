import { DocumentCountOrderByAggregateInput } from "../inputs/DocumentCountOrderByAggregateInput";
import { DocumentMaxOrderByAggregateInput } from "../inputs/DocumentMaxOrderByAggregateInput";
import { DocumentMinOrderByAggregateInput } from "../inputs/DocumentMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class DocumentOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    cpf?: SortOrderInput | undefined;
    cnpj?: SortOrderInput | undefined;
    clientId?: "asc" | "desc" | undefined;
    _count?: DocumentCountOrderByAggregateInput | undefined;
    _max?: DocumentMaxOrderByAggregateInput | undefined;
    _min?: DocumentMinOrderByAggregateInput | undefined;
}
