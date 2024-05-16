import { AddressWhereInput } from "../inputs/AddressWhereInput";
import { ClientRelationFilter } from "../inputs/ClientRelationFilter";
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
    client?: ClientRelationFilter | undefined;
}
