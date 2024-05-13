import { AddressOrderByWithRelationInput } from "../inputs/AddressOrderByWithRelationInput";
import { DocumentOrderByWithRelationInput } from "../inputs/DocumentOrderByWithRelationInput";
import { SaleOrderByRelationAggregateInput } from "../inputs/SaleOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ClientOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    documentId?: "asc" | "desc" | undefined;
    addressId?: "asc" | "desc" | undefined;
    document?: DocumentOrderByWithRelationInput | undefined;
    address?: AddressOrderByWithRelationInput | undefined;
    sales?: SaleOrderByRelationAggregateInput | undefined;
}
