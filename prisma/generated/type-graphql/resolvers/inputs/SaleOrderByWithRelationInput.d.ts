import { ClientOrderByWithRelationInput } from "../inputs/ClientOrderByWithRelationInput";
import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class SaleOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    totalPrice?: "asc" | "desc" | undefined;
    clientId?: "asc" | "desc" | undefined;
    orders?: OrderOrderByRelationAggregateInput | undefined;
    client?: ClientOrderByWithRelationInput | undefined;
}
