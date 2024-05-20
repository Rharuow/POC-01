import { CategoriesProductsListRelationFilter } from "../inputs/CategoriesProductsListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderItemListRelationFilter } from "../inputs/OrderItemListRelationFilter";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProductWhereUniqueInput {
    id?: string | undefined;
    name?: string | undefined;
    AND?: ProductWhereInput[] | undefined;
    OR?: ProductWhereInput[] | undefined;
    NOT?: ProductWhereInput[] | undefined;
    createdAt?: DateTimeFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    description?: StringFilter | undefined;
    inventory_quantity?: IntFilter | undefined;
    price?: FloatFilter | undefined;
    categories?: CategoriesProductsListRelationFilter | undefined;
    orderItems?: OrderItemListRelationFilter | undefined;
}
