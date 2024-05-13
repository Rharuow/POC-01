import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SaleScalarWhereWithAggregatesInput {
    AND?: SaleScalarWhereWithAggregatesInput[] | undefined;
    OR?: SaleScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SaleScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    deletedAt?: DateTimeNullableWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    totalPrice?: FloatWithAggregatesFilter | undefined;
    clientId?: StringWithAggregatesFilter | undefined;
}
