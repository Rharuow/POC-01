import { AddressOrderByWithRelationInput } from "../inputs/AddressOrderByWithRelationInput";
import { DocumentOrderByWithRelationInput } from "../inputs/DocumentOrderByWithRelationInput";
import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ClientOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    documentId?: SortOrderInput | undefined;
    addressId?: SortOrderInput | undefined;
    document?: DocumentOrderByWithRelationInput | undefined;
    address?: AddressOrderByWithRelationInput | undefined;
    Orders?: OrderOrderByRelationAggregateInput | undefined;
}
