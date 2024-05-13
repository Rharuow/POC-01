import type { GraphQLResolveInfo } from "graphql";
import { CreateOneClientArgs } from "./args/CreateOneClientArgs";
import { Client } from "../../../models/Client";
export declare class CreateOneClientResolver {
    createOneClient(ctx: any, info: GraphQLResolveInfo, args: CreateOneClientArgs): Promise<Client>;
}
