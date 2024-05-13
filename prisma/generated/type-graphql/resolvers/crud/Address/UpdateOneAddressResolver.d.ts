import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneAddressArgs } from "./args/UpdateOneAddressArgs";
import { Address } from "../../../models/Address";
export declare class UpdateOneAddressResolver {
    updateOneAddress(ctx: any, info: GraphQLResolveInfo, args: UpdateOneAddressArgs): Promise<Address | null>;
}
