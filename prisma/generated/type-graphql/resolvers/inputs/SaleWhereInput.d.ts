import { ClientRelationFilter } from "../inputs/ClientRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SaleWhereInput {
    AND?: SaleWhereInput[] | undefined;
    OR?: SaleWhereInput[] | undefined;
    NOT?: SaleWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    totalPrice?: FloatFilter | undefined;
    clientId?: StringFilter | undefined;
    orders?: OrderListRelationFilter | undefined;
    client?: ClientRelationFilter | undefined;
}
