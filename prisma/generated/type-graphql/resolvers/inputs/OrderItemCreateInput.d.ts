import { OrderCreateNestedOneWithoutOrderItemsInput } from "../inputs/OrderCreateNestedOneWithoutOrderItemsInput";
import { ProductCreateNestedOneWithoutOrderItemsInput } from "../inputs/ProductCreateNestedOneWithoutOrderItemsInput";
export declare class OrderItemCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    amount?: number | undefined;
    totalPrice: number;
    product: ProductCreateNestedOneWithoutOrderItemsInput;
    order: OrderCreateNestedOneWithoutOrderItemsInput;
}
