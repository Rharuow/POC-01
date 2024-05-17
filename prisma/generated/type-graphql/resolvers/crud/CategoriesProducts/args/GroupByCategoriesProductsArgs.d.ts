import { CategoriesProductsOrderByWithAggregationInput } from "../../../inputs/CategoriesProductsOrderByWithAggregationInput";
import { CategoriesProductsScalarWhereWithAggregatesInput } from "../../../inputs/CategoriesProductsScalarWhereWithAggregatesInput";
import { CategoriesProductsWhereInput } from "../../../inputs/CategoriesProductsWhereInput";
export declare class GroupByCategoriesProductsArgs {
    where?: CategoriesProductsWhereInput | undefined;
    orderBy?: CategoriesProductsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "categoryName" | "productId">;
    having?: CategoriesProductsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
