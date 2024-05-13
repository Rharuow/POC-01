import { AddressRelationFilter } from "../inputs/AddressRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DocumentRelationFilter } from "../inputs/DocumentRelationFilter";
import { SaleListRelationFilter } from "../inputs/SaleListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
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
    documentId?: StringFilter | undefined;
    addressId?: StringFilter | undefined;
    document?: DocumentRelationFilter | undefined;
    address?: AddressRelationFilter | undefined;
    sales?: SaleListRelationFilter | undefined;
}
