import { CategoriesProductsCountOrderByAggregateInput } from "../inputs/CategoriesProductsCountOrderByAggregateInput";
import { CategoriesProductsMaxOrderByAggregateInput } from "../inputs/CategoriesProductsMaxOrderByAggregateInput";
import { CategoriesProductsMinOrderByAggregateInput } from "../inputs/CategoriesProductsMinOrderByAggregateInput";
export declare class CategoriesProductsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    categoryName?: "asc" | "desc" | undefined;
    productId?: "asc" | "desc" | undefined;
    _count?: CategoriesProductsCountOrderByAggregateInput | undefined;
    _max?: CategoriesProductsMaxOrderByAggregateInput | undefined;
    _min?: CategoriesProductsMinOrderByAggregateInput | undefined;
}
