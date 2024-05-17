import { CategoryOrderByWithRelationInput } from "../inputs/CategoryOrderByWithRelationInput";
import { ProductOrderByWithRelationInput } from "../inputs/ProductOrderByWithRelationInput";
export declare class CategoriesProductsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    categoryName?: "asc" | "desc" | undefined;
    productId?: "asc" | "desc" | undefined;
    category?: CategoryOrderByWithRelationInput | undefined;
    product?: ProductOrderByWithRelationInput | undefined;
}
