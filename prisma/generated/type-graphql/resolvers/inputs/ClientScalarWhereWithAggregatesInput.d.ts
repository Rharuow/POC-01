import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ClientScalarWhereWithAggregatesInput {
    AND?: ClientScalarWhereWithAggregatesInput[] | undefined;
    OR?: ClientScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ClientScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    deletedAt?: DateTimeNullableWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    documentId?: StringNullableWithAggregatesFilter | undefined;
    addressId?: StringNullableWithAggregatesFilter | undefined;
}
