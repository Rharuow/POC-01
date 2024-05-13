import { AddressRelationFilter } from "../inputs/AddressRelationFilter";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DocumentRelationFilter } from "../inputs/DocumentRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ClientWhereUniqueInput {
    id?: string | undefined;
    email?: string | undefined;
    documentId?: string | undefined;
    addressId?: string | undefined;
    AND?: ClientWhereInput[] | undefined;
    OR?: ClientWhereInput[] | undefined;
    NOT?: ClientWhereInput[] | undefined;
    createdAt?: DateTimeFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    document?: DocumentRelationFilter | undefined;
    address?: AddressRelationFilter | undefined;
}
