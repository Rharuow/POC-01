import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { Client } from "../../../models/Client";
import { Document } from "../../../models/Document";
import { Sale } from "../../../models/Sale";
import { ClientAddressArgs } from "./args/ClientAddressArgs";
import { ClientDocumentArgs } from "./args/ClientDocumentArgs";
import { ClientSalesArgs } from "./args/ClientSalesArgs";
export declare class ClientRelationsResolver {
    document(client: Client, ctx: any, info: GraphQLResolveInfo, args: ClientDocumentArgs): Promise<Document | null>;
    address(client: Client, ctx: any, info: GraphQLResolveInfo, args: ClientAddressArgs): Promise<Address | null>;
    sales(client: Client, ctx: any, info: GraphQLResolveInfo, args: ClientSalesArgs): Promise<Sale[]>;
}
