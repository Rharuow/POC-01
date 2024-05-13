import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSaleArgs } from "./args/UpdateOneSaleArgs";
import { Sale } from "../../../models/Sale";
export declare class UpdateOneSaleResolver {
    updateOneSale(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSaleArgs): Promise<Sale | null>;
}
