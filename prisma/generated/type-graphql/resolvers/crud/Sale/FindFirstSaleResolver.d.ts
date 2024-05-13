import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSaleArgs } from "./args/FindFirstSaleArgs";
import { Sale } from "../../../models/Sale";
export declare class FindFirstSaleResolver {
    findFirstSale(ctx: any, info: GraphQLResolveInfo, args: FindFirstSaleArgs): Promise<Sale | null>;
}
