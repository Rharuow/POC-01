import { ClientOrderByWithRelationInput } from "../inputs/ClientOrderByWithRelationInput";
import { OrderItemOrderByRelationAggregateInput } from "../inputs/OrderItemOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class OrderOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    totalPrice?: "asc" | "desc" | undefined;
    clientId?: "asc" | "desc" | undefined;
    orderItems?: OrderItemOrderByRelationAggregateInput | undefined;
    client?: ClientOrderByWithRelationInput | undefined;
}
