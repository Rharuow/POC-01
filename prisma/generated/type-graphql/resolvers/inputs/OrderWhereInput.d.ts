import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { SaleRelationFilter } from "../inputs/SaleRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class OrderWhereInput {
    AND?: OrderWhereInput[] | undefined;
    OR?: OrderWhereInput[] | undefined;
    NOT?: OrderWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    amount?: IntFilter | undefined;
    totalPrice?: FloatFilter | undefined;
    productId?: StringFilter | undefined;
    saleId?: StringFilter | undefined;
    product?: ProductRelationFilter | undefined;
    sale?: SaleRelationFilter | undefined;
}
