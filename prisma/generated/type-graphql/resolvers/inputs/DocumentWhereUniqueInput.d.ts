import { ClientNullableRelationFilter } from "../inputs/ClientNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DocumentWhereInput } from "../inputs/DocumentWhereInput";
export declare class DocumentWhereUniqueInput {
    id?: string | undefined;
    cpf?: string | undefined;
    cnpj?: string | undefined;
    clientId?: string | undefined;
    AND?: DocumentWhereInput[] | undefined;
    OR?: DocumentWhereInput[] | undefined;
    NOT?: DocumentWhereInput[] | undefined;
    createdAt?: DateTimeFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    client?: ClientNullableRelationFilter | undefined;
}
