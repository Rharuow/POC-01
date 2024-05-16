import { AddressCreateNestedOneWithoutClientInput } from "../inputs/AddressCreateNestedOneWithoutClientInput";
import { DocumentCreateNestedOneWithoutClientInput } from "../inputs/DocumentCreateNestedOneWithoutClientInput";
import { SaleCreateNestedManyWithoutClientInput } from "../inputs/SaleCreateNestedManyWithoutClientInput";
export declare class ClientCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    email: string;
    documentId?: string | undefined;
    addressId?: string | undefined;
    document?: DocumentCreateNestedOneWithoutClientInput | undefined;
    address?: AddressCreateNestedOneWithoutClientInput | undefined;
    sales?: SaleCreateNestedManyWithoutClientInput | undefined;
}
