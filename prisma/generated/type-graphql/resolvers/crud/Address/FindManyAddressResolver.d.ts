import type { GraphQLResolveInfo } from "graphql";
import { FindManyAddressArgs } from "./args/FindManyAddressArgs";
import { Address } from "../../../models/Address";
export declare class FindManyAddressResolver {
    addresses(ctx: any, info: GraphQLResolveInfo, args: FindManyAddressArgs): Promise<Address[]>;
}
