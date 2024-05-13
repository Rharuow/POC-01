import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAddressOrThrowArgs } from "./args/FindFirstAddressOrThrowArgs";
import { Address } from "../../../models/Address";
export declare class FindFirstAddressOrThrowResolver {
    findFirstAddressOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstAddressOrThrowArgs): Promise<Address | null>;
}
