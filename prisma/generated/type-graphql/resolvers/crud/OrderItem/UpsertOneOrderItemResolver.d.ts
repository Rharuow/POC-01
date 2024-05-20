import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneOrderItemArgs } from "./args/UpsertOneOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
export declare class UpsertOneOrderItemResolver {
    upsertOneOrderItem(ctx: any, info: GraphQLResolveInfo, args: UpsertOneOrderItemArgs): Promise<OrderItem>;
}
