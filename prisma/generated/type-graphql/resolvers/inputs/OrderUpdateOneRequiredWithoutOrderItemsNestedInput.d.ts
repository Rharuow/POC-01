import { OrderCreateOrConnectWithoutOrderItemsInput } from "../inputs/OrderCreateOrConnectWithoutOrderItemsInput";
import { OrderCreateWithoutOrderItemsInput } from "../inputs/OrderCreateWithoutOrderItemsInput";
import { OrderUpdateToOneWithWhereWithoutOrderItemsInput } from "../inputs/OrderUpdateToOneWithWhereWithoutOrderItemsInput";
import { OrderUpsertWithoutOrderItemsInput } from "../inputs/OrderUpsertWithoutOrderItemsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateOneRequiredWithoutOrderItemsNestedInput {
    create?: OrderCreateWithoutOrderItemsInput | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput | undefined;
    upsert?: OrderUpsertWithoutOrderItemsInput | undefined;
    connect?: OrderWhereUniqueInput | undefined;
    update?: OrderUpdateToOneWithWhereWithoutOrderItemsInput | undefined;
}
