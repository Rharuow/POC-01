import type { GraphQLResolveInfo } from "graphql";
import { FindFirstOrderItemOrThrowArgs } from "./args/FindFirstOrderItemOrThrowArgs";
import { OrderItem } from "../../../models/OrderItem";
export declare class FindFirstOrderItemOrThrowResolver {
    findFirstOrderItemOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrderItemOrThrowArgs): Promise<OrderItem | null>;
}
