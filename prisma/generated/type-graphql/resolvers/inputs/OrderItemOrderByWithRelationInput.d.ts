import { OrderOrderByWithRelationInput } from "../inputs/OrderOrderByWithRelationInput";
import { ProductOrderByWithRelationInput } from "../inputs/ProductOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class OrderItemOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    amount?: "asc" | "desc" | undefined;
    totalPrice?: "asc" | "desc" | undefined;
    productId?: "asc" | "desc" | undefined;
    orderId?: "asc" | "desc" | undefined;
    product?: ProductOrderByWithRelationInput | undefined;
    order?: OrderOrderByWithRelationInput | undefined;
}
