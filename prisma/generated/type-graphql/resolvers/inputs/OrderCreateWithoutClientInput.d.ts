import { OrderItemCreateNestedManyWithoutOrderInput } from "../inputs/OrderItemCreateNestedManyWithoutOrderInput";
export declare class OrderCreateWithoutClientInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    totalPrice: number;
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput | undefined;
}
