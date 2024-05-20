import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrderItemOrThrowArgs } from "./args/FindUniqueOrderItemOrThrowArgs";
import { OrderItem } from "../../../models/OrderItem";
export declare class FindUniqueOrderItemOrThrowResolver {
    getOrderItem(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrderItemOrThrowArgs): Promise<OrderItem | null>;
}
