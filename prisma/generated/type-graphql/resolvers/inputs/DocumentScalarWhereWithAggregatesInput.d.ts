import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class DocumentScalarWhereWithAggregatesInput {
    AND?: DocumentScalarWhereWithAggregatesInput[] | undefined;
    OR?: DocumentScalarWhereWithAggregatesInput[] | undefined;
    NOT?: DocumentScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    deletedAt?: DateTimeNullableWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    cpf?: StringNullableWithAggregatesFilter | undefined;
    cnpj?: StringNullableWithAggregatesFilter | undefined;
    clientId?: StringWithAggregatesFilter | undefined;
}
