import type { GraphQLResolveInfo } from "graphql";
import { Client } from "../../../models/Client";
import { Document } from "../../../models/Document";
export declare class DocumentRelationsResolver {
    client(document: Document, ctx: any, info: GraphQLResolveInfo): Promise<Client>;
}
