import { CategoriesProductsListRelationFilter } from "../inputs/CategoriesProductsListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderItemListRelationFilter } from "../inputs/OrderItemListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProductWhereInput {
    AND?: ProductWhereInput[] | undefined;
    OR?: ProductWhereInput[] | undefined;
    NOT?: ProductWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringFilter | undefined;
    inventory_quantity?: IntFilter | undefined;
    price?: FloatFilter | undefined;
    categories?: CategoriesProductsListRelationFilter | undefined;
    orderItems?: OrderItemListRelationFilter | undefined;
}
