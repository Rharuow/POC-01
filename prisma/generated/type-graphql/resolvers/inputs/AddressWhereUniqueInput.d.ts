import { AddressWhereInput } from "../inputs/AddressWhereInput";
import { ClientNullableRelationFilter } from "../inputs/ClientNullableRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
export declare class AddressWhereUniqueInput {
    id?: string | undefined;
    billing?: string | undefined;
    delivery?: string | undefined;
    clientId?: string | undefined;
    AND?: AddressWhereInput[] | undefined;
    OR?: AddressWhereInput[] | undefined;
    NOT?: AddressWhereInput[] | undefined;
    createdAt?: DateTimeNullableFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    updatedAt?: DateTimeNullableFilter | undefined;
    client?: ClientNullableRelationFilter | undefined;
}
