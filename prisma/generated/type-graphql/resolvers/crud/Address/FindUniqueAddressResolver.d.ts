import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAddressArgs } from "./args/FindUniqueAddressArgs";
import { Address } from "../../../models/Address";
export declare class FindUniqueAddressResolver {
    address(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAddressArgs): Promise<Address | null>;
}
