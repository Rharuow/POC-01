import { DocumentCreateNestedOneWithoutClientInput } from "../inputs/DocumentCreateNestedOneWithoutClientInput";
import { SaleCreateNestedManyWithoutClientInput } from "../inputs/SaleCreateNestedManyWithoutClientInput";
export declare class ClientCreateWithoutAddressInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    email: string;
    documentId?: string | undefined;
    addressId?: string | undefined;
    document?: DocumentCreateNestedOneWithoutClientInput | undefined;
    sales?: SaleCreateNestedManyWithoutClientInput | undefined;
}
