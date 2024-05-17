import { CategoriesProductsOrderByRelationAggregateInput } from "../inputs/CategoriesProductsOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class CategoryOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    deletedAt?: SortOrderInput | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    produtos?: CategoriesProductsOrderByRelationAggregateInput | undefined;
}
