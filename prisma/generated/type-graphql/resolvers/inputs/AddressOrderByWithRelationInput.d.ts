import { ClientOrderByWithRelationInput } from "../inputs/ClientOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class AddressOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: SortOrderInput | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: SortOrderInput | undefined;
    billing?: SortOrderInput | undefined;
    delivery?: SortOrderInput | undefined;
    clientId?: SortOrderInput | undefined;
    client?: ClientOrderByWithRelationInput | undefined;
}
