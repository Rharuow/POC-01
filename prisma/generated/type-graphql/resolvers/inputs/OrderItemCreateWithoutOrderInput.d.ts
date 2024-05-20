import { ProductCreateNestedOneWithoutOrderItemsInput } from "../inputs/ProductCreateNestedOneWithoutOrderItemsInput";
export declare class OrderItemCreateWithoutOrderInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    amount?: number | undefined;
    totalPrice: number;
    product: ProductCreateNestedOneWithoutOrderItemsInput;
}
