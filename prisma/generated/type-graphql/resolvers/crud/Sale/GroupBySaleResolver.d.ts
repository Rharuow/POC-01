import type { GraphQLResolveInfo } from "graphql";
import { GroupBySaleArgs } from "./args/GroupBySaleArgs";
import { SaleGroupBy } from "../../outputs/SaleGroupBy";
export declare class GroupBySaleResolver {
    groupBySale(ctx: any, info: GraphQLResolveInfo, args: GroupBySaleArgs): Promise<SaleGroupBy[]>;
}
