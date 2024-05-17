import { StringFilter } from "../inputs/StringFilter";
export declare class CategoriesProductsScalarWhereInput {
    AND?: CategoriesProductsScalarWhereInput[] | undefined;
    OR?: CategoriesProductsScalarWhereInput[] | undefined;
    NOT?: CategoriesProductsScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    categoryName?: StringFilter | undefined;
    productId?: StringFilter | undefined;
}
