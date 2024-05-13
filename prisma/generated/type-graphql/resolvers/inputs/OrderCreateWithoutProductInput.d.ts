import { SaleCreateNestedOneWithoutOrdersInput } from "../inputs/SaleCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateWithoutProductInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    amount?: number | undefined;
    totalPrice: number;
    sale: SaleCreateNestedOneWithoutOrdersInput;
}
