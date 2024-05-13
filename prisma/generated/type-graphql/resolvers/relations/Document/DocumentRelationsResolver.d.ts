import type { GraphQLResolveInfo } from "graphql";
import { Client } from "../../../models/Client";
import { Document } from "../../../models/Document";
import { DocumentClientArgs } from "./args/DocumentClientArgs";
export declare class DocumentRelationsResolver {
    client(document: Document, ctx: any, info: GraphQLResolveInfo, args: DocumentClientArgs): Promise<Client | null>;
}
