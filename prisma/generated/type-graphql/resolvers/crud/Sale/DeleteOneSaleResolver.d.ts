import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSaleArgs } from "./args/DeleteOneSaleArgs";
import { Sale } from "../../../models/Sale";
export declare class DeleteOneSaleResolver {
    deleteOneSale(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSaleArgs): Promise<Sale | null>;
}
