import { OrderCreateNestedOneWithoutOrderItemsInput } from "../inputs/OrderCreateNestedOneWithoutOrderItemsInput";
export declare class OrderItemCreateWithoutProductInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    amount?: number | undefined;
    totalPrice: number;
    order: OrderCreateNestedOneWithoutOrderItemsInput;
}
