import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyClientArgs } from "./args/UpdateManyClientArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyClientResolver {
    updateManyClient(ctx: any, info: GraphQLResolveInfo, args: UpdateManyClientArgs): Promise<AffectedRowsOutput>;
}
