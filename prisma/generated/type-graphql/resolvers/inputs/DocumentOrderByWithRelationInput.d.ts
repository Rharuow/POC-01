import { ClientOrderByWithRelationInput } from "../inputs/ClientOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class DocumentOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    cpf?: SortOrderInput | undefined;
    cnpj?: SortOrderInput | undefined;
    clientId?: "asc" | "desc" | undefined;
    client?: ClientOrderByWithRelationInput | undefined;
}
