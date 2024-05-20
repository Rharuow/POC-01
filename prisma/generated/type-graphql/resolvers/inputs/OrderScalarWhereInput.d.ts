import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class OrderScalarWhereInput {
    AND?: OrderScalarWhereInput[] | undefined;
    OR?: OrderScalarWhereInput[] | undefined;
    NOT?: OrderScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    totalPrice?: FloatFilter | undefined;
    clientId?: StringFilter | undefined;
}
