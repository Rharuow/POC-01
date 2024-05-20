import { OrderItemOrderByWithRelationInput } from "../../../inputs/OrderItemOrderByWithRelationInput";
import { OrderItemWhereInput } from "../../../inputs/OrderItemWhereInput";
import { OrderItemWhereUniqueInput } from "../../../inputs/OrderItemWhereUniqueInput";
export declare class FindManyOrderItemArgs {
    where?: OrderItemWhereInput | undefined;
    orderBy?: OrderItemOrderByWithRelationInput[] | undefined;
    cursor?: OrderItemWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "deletedAt" | "updatedAt" | "amount" | "totalPrice" | "productId" | "orderId"> | undefined;
}
