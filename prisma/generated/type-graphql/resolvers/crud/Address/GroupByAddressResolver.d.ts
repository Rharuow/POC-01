import type { GraphQLResolveInfo } from "graphql";
import { GroupByAddressArgs } from "./args/GroupByAddressArgs";
import { AddressGroupBy } from "../../outputs/AddressGroupBy";
export declare class GroupByAddressResolver {
    groupByAddress(ctx: any, info: GraphQLResolveInfo, args: GroupByAddressArgs): Promise<AddressGroupBy[]>;
}
