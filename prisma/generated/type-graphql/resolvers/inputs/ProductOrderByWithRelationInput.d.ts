import { CategoriesProductsOrderByRelationAggregateInput } from "../inputs/CategoriesProductsOrderByRelationAggregateInput";
import { OrderItemOrderByRelationAggregateInput } from "../inputs/OrderItemOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ProductOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    inventory_quantity?: "asc" | "desc" | undefined;
    price?: "asc" | "desc" | undefined;
    categories?: CategoriesProductsOrderByRelationAggregateInput | undefined;
    orderItems?: OrderItemOrderByRelationAggregateInput | undefined;
}
