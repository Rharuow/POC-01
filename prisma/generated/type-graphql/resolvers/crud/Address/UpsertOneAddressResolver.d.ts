import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneAddressArgs } from "./args/UpsertOneAddressArgs";
import { Address } from "../../../models/Address";
export declare class UpsertOneAddressResolver {
    upsertOneAddress(ctx: any, info: GraphQLResolveInfo, args: UpsertOneAddressArgs): Promise<Address>;
}
