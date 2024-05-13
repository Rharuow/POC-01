import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { Client } from "../../../models/Client";
import { Document } from "../../../models/Document";
export declare class ClientRelationsResolver {
    document(client: Client, ctx: any, info: GraphQLResolveInfo): Promise<Document>;
    address(client: Client, ctx: any, info: GraphQLResolveInfo): Promise<Address>;
}
