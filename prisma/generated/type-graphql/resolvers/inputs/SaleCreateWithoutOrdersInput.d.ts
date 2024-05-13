import { ClientCreateNestedOneWithoutSalesInput } from "../inputs/ClientCreateNestedOneWithoutSalesInput";
export declare class SaleCreateWithoutOrdersInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    totalPrice: number;
    client: ClientCreateNestedOneWithoutSalesInput;
}
