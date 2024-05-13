import type { GraphQLResolveInfo } from "graphql";
import { CreateOneAddressArgs } from "./args/CreateOneAddressArgs";
import { Address } from "../../../models/Address";
export declare class CreateOneAddressResolver {
    createOneAddress(ctx: any, info: GraphQLResolveInfo, args: CreateOneAddressArgs): Promise<Address>;
}
