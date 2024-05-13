import type { GraphQLResolveInfo } from "graphql";
import { GroupByClientArgs } from "./args/GroupByClientArgs";
import { ClientGroupBy } from "../../outputs/ClientGroupBy";
export declare class GroupByClientResolver {
    groupByClient(ctx: any, info: GraphQLResolveInfo, args: GroupByClientArgs): Promise<ClientGroupBy[]>;
}
