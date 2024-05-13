import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneAddressArgs } from "./args/DeleteOneAddressArgs";
import { Address } from "../../../models/Address";
export declare class DeleteOneAddressResolver {
    deleteOneAddress(ctx: any, info: GraphQLResolveInfo, args: DeleteOneAddressArgs): Promise<Address | null>;
}
