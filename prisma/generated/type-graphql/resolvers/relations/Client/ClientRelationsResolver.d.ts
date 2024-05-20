import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { Client } from "../../../models/Client";
import { Document } from "../../../models/Document";
import { Order } from "../../../models/Order";
import { ClientAddressArgs } from "./args/ClientAddressArgs";
import { ClientDocumentArgs } from "./args/ClientDocumentArgs";
import { ClientOrdersArgs } from "./args/ClientOrdersArgs";
export declare class ClientRelationsResolver {
    document(client: Client, ctx: any, info: GraphQLResolveInfo, args: ClientDocumentArgs): Promise<Document | null>;
    address(client: Client, ctx: any, info: GraphQLResolveInfo, args: ClientAddressArgs): Promise<Address | null>;
    Orders(client: Client, ctx: any, info: GraphQLResolveInfo, args: ClientOrdersArgs): Promise<Order[]>;
}
