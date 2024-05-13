import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSaleArgs } from "./args/UpsertOneSaleArgs";
import { Sale } from "../../../models/Sale";
export declare class UpsertOneSaleResolver {
    upsertOneSale(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSaleArgs): Promise<Sale>;
}
