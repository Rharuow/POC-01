import { ClientCreateNestedOneWithoutOrdersInput } from "../inputs/ClientCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateWithoutOrderItemsInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    totalPrice: number;
    client: ClientCreateNestedOneWithoutOrdersInput;
}
