import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSaleArgs } from "./args/FindUniqueSaleArgs";
import { Sale } from "../../../models/Sale";
export declare class FindUniqueSaleResolver {
    sale(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSaleArgs): Promise<Sale | null>;
}
