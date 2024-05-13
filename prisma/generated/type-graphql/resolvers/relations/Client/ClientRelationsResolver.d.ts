import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { Client } from "../../../models/Client";
import { Document } from "../../../models/Document";
import { Sale } from "../../../models/Sale";
import { ClientSalesArgs } from "./args/ClientSalesArgs";
export declare class ClientRelationsResolver {
    document(client: Client, ctx: any, info: GraphQLResolveInfo): Promise<Document>;
    address(client: Client, ctx: any, info: GraphQLResolveInfo): Promise<Address>;
    sales(client: Client, ctx: any, info: GraphQLResolveInfo, args: ClientSalesArgs): Promise<Sale[]>;
}
