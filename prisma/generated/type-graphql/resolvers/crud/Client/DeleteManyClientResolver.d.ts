import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyClientArgs } from "./args/DeleteManyClientArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyClientResolver {
    deleteManyClient(ctx: any, info: GraphQLResolveInfo, args: DeleteManyClientArgs): Promise<AffectedRowsOutput>;
}
