import { AddressNullableRelationFilter } from "../inputs/AddressNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DocumentNullableRelationFilter } from "../inputs/DocumentNullableRelationFilter";
import { SaleListRelationFilter } from "../inputs/SaleListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ClientWhereInput {
    AND?: ClientWhereInput[] | undefined;
    OR?: ClientWhereInput[] | undefined;
    NOT?: ClientWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    email?: StringFilter | undefined;
    documentId?: StringNullableFilter | undefined;
    addressId?: StringNullableFilter | undefined;
    document?: DocumentNullableRelationFilter | undefined;
    address?: AddressNullableRelationFilter | undefined;
    sales?: SaleListRelationFilter | undefined;
}
