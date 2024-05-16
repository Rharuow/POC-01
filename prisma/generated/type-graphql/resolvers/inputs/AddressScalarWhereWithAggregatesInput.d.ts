import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AddressScalarWhereWithAggregatesInput {
    AND?: AddressScalarWhereWithAggregatesInput[] | undefined;
    OR?: AddressScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AddressScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeNullableWithAggregatesFilter | undefined;
    deletedAt?: DateTimeNullableWithAggregatesFilter | undefined;
    updatedAt?: DateTimeNullableWithAggregatesFilter | undefined;
    billing?: StringNullableWithAggregatesFilter | undefined;
    delivery?: StringNullableWithAggregatesFilter | undefined;
    clientId?: StringWithAggregatesFilter | undefined;
}
