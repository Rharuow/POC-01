import type { GraphQLResolveInfo } from "graphql";
import { DeleteManySaleArgs } from "./args/DeleteManySaleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySaleResolver {
    deleteManySale(ctx: any, info: GraphQLResolveInfo, args: DeleteManySaleArgs): Promise<AffectedRowsOutput>;
}
