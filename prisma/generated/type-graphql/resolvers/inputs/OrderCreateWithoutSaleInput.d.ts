import { ProductCreateNestedOneWithoutOrdersInput } from "../inputs/ProductCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateWithoutSaleInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    amount?: number | undefined;
    totalPrice: number;
    product: ProductCreateNestedOneWithoutOrdersInput;
}
