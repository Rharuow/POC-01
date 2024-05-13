import type { GraphQLResolveInfo } from "graphql";
import { Order } from "../../../models/Order";
import { Product } from "../../../models/Product";
import { Sale } from "../../../models/Sale";
export declare class OrderRelationsResolver {
    product(order: Order, ctx: any, info: GraphQLResolveInfo): Promise<Product>;
    sale(order: Order, ctx: any, info: GraphQLResolveInfo): Promise<Sale>;
}
