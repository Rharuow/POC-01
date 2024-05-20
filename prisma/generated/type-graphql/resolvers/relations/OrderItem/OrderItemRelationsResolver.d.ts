import type { GraphQLResolveInfo } from "graphql";
import { Order } from "../../../models/Order";
import { OrderItem } from "../../../models/OrderItem";
import { Product } from "../../../models/Product";
export declare class OrderItemRelationsResolver {
    product(orderItem: OrderItem, ctx: any, info: GraphQLResolveInfo): Promise<Product>;
    order(orderItem: OrderItem, ctx: any, info: GraphQLResolveInfo): Promise<Order>;
}
