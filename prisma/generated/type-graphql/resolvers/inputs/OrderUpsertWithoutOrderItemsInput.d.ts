import { OrderCreateWithoutOrderItemsInput } from "../inputs/OrderCreateWithoutOrderItemsInput";
import { OrderUpdateWithoutOrderItemsInput } from "../inputs/OrderUpdateWithoutOrderItemsInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";
export declare class OrderUpsertWithoutOrderItemsInput {
    update: OrderUpdateWithoutOrderItemsInput;
    create: OrderCreateWithoutOrderItemsInput;
    where?: OrderWhereInput | undefined;
}
