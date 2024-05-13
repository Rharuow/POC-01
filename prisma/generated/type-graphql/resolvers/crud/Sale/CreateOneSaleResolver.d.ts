import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSaleArgs } from "./args/CreateOneSaleArgs";
import { Sale } from "../../../models/Sale";
export declare class CreateOneSaleResolver {
    createOneSale(ctx: any, info: GraphQLResolveInfo, args: CreateOneSaleArgs): Promise<Sale>;
}
