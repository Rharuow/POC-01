import { OrderItemCreateInput } from "../../../inputs/OrderItemCreateInput";
import { OrderItemUpdateInput } from "../../../inputs/OrderItemUpdateInput";
import { OrderItemWhereUniqueInput } from "../../../inputs/OrderItemWhereUniqueInput";
export declare class UpsertOneOrderItemArgs {
    where: OrderItemWhereUniqueInput;
    create: OrderItemCreateInput;
    update: OrderItemUpdateInput;
}
