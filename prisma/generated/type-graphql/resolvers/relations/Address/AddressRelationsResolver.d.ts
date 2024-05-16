import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { Client } from "../../../models/Client";
export declare class AddressRelationsResolver {
    client(address: Address, ctx: any, info: GraphQLResolveInfo): Promise<Client>;
}
