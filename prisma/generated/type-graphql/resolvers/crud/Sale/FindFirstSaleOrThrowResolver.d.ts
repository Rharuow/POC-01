import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSaleOrThrowArgs } from "./args/FindFirstSaleOrThrowArgs";
import { Sale } from "../../../models/Sale";
export declare class FindFirstSaleOrThrowResolver {
    findFirstSaleOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstSaleOrThrowArgs): Promise<Sale | null>;
}
