import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSaleOrThrowArgs } from "./args/FindUniqueSaleOrThrowArgs";
import { Sale } from "../../../models/Sale";
export declare class FindUniqueSaleOrThrowResolver {
    getSale(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSaleOrThrowArgs): Promise<Sale | null>;
}
