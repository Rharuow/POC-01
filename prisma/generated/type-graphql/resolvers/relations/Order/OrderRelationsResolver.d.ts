import type { GraphQLResolveInfo } from "graphql";
import { Client } from "../../../models/Client";
import { Order } from "../../../models/Order";
import { OrderItem } from "../../../models/OrderItem";
import { OrderOrderItemsArgs } from "./args/OrderOrderItemsArgs";
export declare class OrderRelationsResolver {
    orderItems(order: Order, ctx: any, info: GraphQLResolveInfo, args: OrderOrderItemsArgs): Promise<OrderItem[]>;
    client(order: Order, ctx: any, info: GraphQLResolveInfo): Promise<Client>;
}
