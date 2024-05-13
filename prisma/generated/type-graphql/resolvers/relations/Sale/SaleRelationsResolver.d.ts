import type { GraphQLResolveInfo } from "graphql";
import { Client } from "../../../models/Client";
import { Order } from "../../../models/Order";
import { Sale } from "../../../models/Sale";
import { SaleOrdersArgs } from "./args/SaleOrdersArgs";
export declare class SaleRelationsResolver {
    orders(sale: Sale, ctx: any, info: GraphQLResolveInfo, args: SaleOrdersArgs): Promise<Order[]>;
    client(sale: Sale, ctx: any, info: GraphQLResolveInfo): Promise<Client>;
}
