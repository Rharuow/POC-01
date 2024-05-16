import { AddressNullableRelationFilter } from "../inputs/AddressNullableRelationFilter";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DocumentNullableRelationFilter } from "../inputs/DocumentNullableRelationFilter";
import { SaleListRelationFilter } from "../inputs/SaleListRelationFilter";
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
    document?: DocumentNullableRelationFilter | undefined;
    address?: AddressNullableRelationFilter | undefined;
    sales?: SaleListRelationFilter | undefined;
}
