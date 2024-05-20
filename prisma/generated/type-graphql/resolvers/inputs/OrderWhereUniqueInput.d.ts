import { ClientRelationFilter } from "../inputs/ClientRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { OrderItemListRelationFilter } from "../inputs/OrderItemListRelationFilter";
import { OrderWhereInput } from "../inputs/OrderWhereInput";
import { StringFilter } from "../inputs/StringFilter";
export declare class OrderWhereUniqueInput {
    id?: string | undefined;
    AND?: OrderWhereInput[] | undefined;
    OR?: OrderWhereInput[] | undefined;
    NOT?: OrderWhereInput[] | undefined;
    createdAt?: DateTimeFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    totalPrice?: FloatFilter | undefined;
    clientId?: StringFilter | undefined;
    orderItems?: OrderItemListRelationFilter | undefined;
    client?: ClientRelationFilter | undefined;
}
