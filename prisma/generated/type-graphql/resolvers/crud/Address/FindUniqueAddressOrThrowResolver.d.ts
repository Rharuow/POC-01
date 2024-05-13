import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAddressOrThrowArgs } from "./args/FindUniqueAddressOrThrowArgs";
import { Address } from "../../../models/Address";
export declare class FindUniqueAddressOrThrowResolver {
    getAddress(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAddressOrThrowArgs): Promise<Address | null>;
}
