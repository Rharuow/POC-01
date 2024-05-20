import type { GraphQLResolveInfo } from "graphql";
import { CreateOneOrderItemArgs } from "./args/CreateOneOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
export declare class CreateOneOrderItemResolver {
    createOneOrderItem(ctx: any, info: GraphQLResolveInfo, args: CreateOneOrderItemArgs): Promise<OrderItem>;
}
