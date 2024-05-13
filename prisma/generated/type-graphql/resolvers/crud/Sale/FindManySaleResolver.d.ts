import type { GraphQLResolveInfo } from "graphql";
import { FindManySaleArgs } from "./args/FindManySaleArgs";
import { Sale } from "../../../models/Sale";
export declare class FindManySaleResolver {
    sales(ctx: any, info: GraphQLResolveInfo, args: FindManySaleArgs): Promise<Sale[]>;
}
