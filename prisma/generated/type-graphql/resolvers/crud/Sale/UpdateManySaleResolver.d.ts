import type { GraphQLResolveInfo } from "graphql";
import { UpdateManySaleArgs } from "./args/UpdateManySaleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySaleResolver {
    updateManySale(ctx: any, info: GraphQLResolveInfo, args: UpdateManySaleArgs): Promise<AffectedRowsOutput>;
}
