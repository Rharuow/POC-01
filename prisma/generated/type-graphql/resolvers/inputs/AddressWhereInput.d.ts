import { ClientNullableRelationFilter } from "../inputs/ClientNullableRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AddressWhereInput {
    AND?: AddressWhereInput[] | undefined;
    OR?: AddressWhereInput[] | undefined;
    NOT?: AddressWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeNullableFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    updatedAt?: DateTimeNullableFilter | undefined;
    billing?: StringNullableFilter | undefined;
    delivery?: StringNullableFilter | undefined;
    clientId?: StringNullableFilter | undefined;
    client?: ClientNullableRelationFilter | undefined;
}
