import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneClientArgs } from "./args/DeleteOneClientArgs";
import { Client } from "../../../models/Client";
export declare class DeleteOneClientResolver {
    deleteOneClient(ctx: any, info: GraphQLResolveInfo, args: DeleteOneClientArgs): Promise<Client | null>;
}
