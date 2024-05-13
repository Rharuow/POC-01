import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneClientArgs } from "./args/UpdateOneClientArgs";
import { Client } from "../../../models/Client";
export declare class UpdateOneClientResolver {
    updateOneClient(ctx: any, info: GraphQLResolveInfo, args: UpdateOneClientArgs): Promise<Client | null>;
}
