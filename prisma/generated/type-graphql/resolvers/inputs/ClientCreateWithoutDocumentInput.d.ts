import { AddressCreateNestedOneWithoutClientInput } from "../inputs/AddressCreateNestedOneWithoutClientInput";
import { OrderCreateNestedManyWithoutClientInput } from "../inputs/OrderCreateNestedManyWithoutClientInput";
export declare class ClientCreateWithoutDocumentInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    email: string;
    documentId?: string | undefined;
    addressId?: string | undefined;
    address?: AddressCreateNestedOneWithoutClientInput | undefined;
    Orders?: OrderCreateNestedManyWithoutClientInput | undefined;
}
