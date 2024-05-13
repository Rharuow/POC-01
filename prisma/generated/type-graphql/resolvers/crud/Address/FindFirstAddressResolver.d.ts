import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAddressArgs } from "./args/FindFirstAddressArgs";
import { Address } from "../../../models/Address";
export declare class FindFirstAddressResolver {
    findFirstAddress(ctx: any, info: GraphQLResolveInfo, args: FindFirstAddressArgs): Promise<Address | null>;
}
