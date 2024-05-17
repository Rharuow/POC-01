import { CategoriesProductsListRelationFilter } from "../inputs/CategoriesProductsListRelationFilter";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
export declare class CategoryWhereUniqueInput {
    id?: string | undefined;
    name?: string | undefined;
    AND?: CategoryWhereInput[] | undefined;
    OR?: CategoryWhereInput[] | undefined;
    NOT?: CategoryWhereInput[] | undefined;
    createdAt?: DateTimeFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    produtos?: CategoriesProductsListRelationFilter | undefined;
}
