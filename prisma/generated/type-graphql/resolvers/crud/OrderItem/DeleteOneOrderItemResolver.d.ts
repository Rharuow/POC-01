import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneOrderItemArgs } from "./args/DeleteOneOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
export declare class DeleteOneOrderItemResolver {
    deleteOneOrderItem(ctx: any, info: GraphQLResolveInfo, args: DeleteOneOrderItemArgs): Promise<OrderItem | null>;
}
