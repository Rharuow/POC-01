import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneOrderItemArgs } from "./args/UpdateOneOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
export declare class UpdateOneOrderItemResolver {
    updateOneOrderItem(ctx: any, info: GraphQLResolveInfo, args: UpdateOneOrderItemArgs): Promise<OrderItem | null>;
}
