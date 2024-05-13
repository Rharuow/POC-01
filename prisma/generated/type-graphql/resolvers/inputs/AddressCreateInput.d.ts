import { ClientCreateNestedOneWithoutAddressInput } from "../inputs/ClientCreateNestedOneWithoutAddressInput";
export declare class AddressCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    billing?: string | undefined;
    delivery?: string | undefined;
    clientId?: string | undefined;
    client?: ClientCreateNestedOneWithoutAddressInput | undefined;
}
