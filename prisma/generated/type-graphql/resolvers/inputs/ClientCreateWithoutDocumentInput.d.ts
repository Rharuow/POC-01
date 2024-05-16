import { AddressCreateNestedOneWithoutClientInput } from "../inputs/AddressCreateNestedOneWithoutClientInput";
import { SaleCreateNestedManyWithoutClientInput } from "../inputs/SaleCreateNestedManyWithoutClientInput";
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
    sales?: SaleCreateNestedManyWithoutClientInput | undefined;
}
