import { OrderCreateOrConnectWithoutOrderItemsInput } from "../inputs/OrderCreateOrConnectWithoutOrderItemsInput";
import { OrderCreateWithoutOrderItemsInput } from "../inputs/OrderCreateWithoutOrderItemsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedOneWithoutOrderItemsInput {
    create?: OrderCreateWithoutOrderItemsInput | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput | undefined;
    connect?: OrderWhereUniqueInput | undefined;
}
