import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class OrderItemScalarWhereInput {
    AND?: OrderItemScalarWhereInput[] | undefined;
    OR?: OrderItemScalarWhereInput[] | undefined;
    NOT?: OrderItemScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    amount?: IntFilter | undefined;
    totalPrice?: FloatFilter | undefined;
    productId?: StringFilter | undefined;
    orderId?: StringFilter | undefined;
}
