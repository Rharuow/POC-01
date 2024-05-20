import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class OrderItemScalarWhereWithAggregatesInput {
    AND?: OrderItemScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrderItemScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrderItemScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    deletedAt?: DateTimeNullableWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    amount?: IntWithAggregatesFilter | undefined;
    totalPrice?: FloatWithAggregatesFilter | undefined;
    productId?: StringWithAggregatesFilter | undefined;
    orderId?: StringWithAggregatesFilter | undefined;
}
