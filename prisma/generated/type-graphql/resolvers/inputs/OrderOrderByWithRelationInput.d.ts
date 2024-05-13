import { ProductOrderByWithRelationInput } from "../inputs/ProductOrderByWithRelationInput";
import { SaleOrderByWithRelationInput } from "../inputs/SaleOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class OrderOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    amount?: "asc" | "desc" | undefined;
    totalPrice?: "asc" | "desc" | undefined;
    productId?: "asc" | "desc" | undefined;
    saleId?: "asc" | "desc" | undefined;
    product?: ProductOrderByWithRelationInput | undefined;
    sale?: SaleOrderByWithRelationInput | undefined;
}
