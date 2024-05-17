import { CategoriesProductsWhereInput } from "../inputs/CategoriesProductsWhereInput";
import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CategoriesProductsWhereUniqueInput {
    id?: string | undefined;
    AND?: CategoriesProductsWhereInput[] | undefined;
    OR?: CategoriesProductsWhereInput[] | undefined;
    NOT?: CategoriesProductsWhereInput[] | undefined;
    categoryName?: StringFilter | undefined;
    productId?: StringFilter | undefined;
    category?: CategoryRelationFilter | undefined;
    product?: ProductRelationFilter | undefined;
}
