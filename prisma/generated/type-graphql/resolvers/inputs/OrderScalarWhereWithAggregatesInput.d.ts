import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class OrderScalarWhereWithAggregatesInput {
    AND?: OrderScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrderScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrderScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    deletedAt?: DateTimeNullableWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    amount?: IntWithAggregatesFilter | undefined;
    totalPrice?: FloatWithAggregatesFilter | undefined;
    productId?: StringWithAggregatesFilter | undefined;
    saleId?: StringWithAggregatesFilter | undefined;
}
