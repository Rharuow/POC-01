import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { Client } from "../../../models/Client";
import { AddressClientArgs } from "./args/AddressClientArgs";
export declare class AddressRelationsResolver {
    client(address: Address, ctx: any, info: GraphQLResolveInfo, args: AddressClientArgs): Promise<Client | null>;
}
