import type { GraphQLResolveInfo } from "graphql";
import { CreateManyClientArgs } from "./args/CreateManyClientArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyClientResolver {
    createManyClient(ctx: any, info: GraphQLResolveInfo, args: CreateManyClientArgs): Promise<AffectedRowsOutput>;
}
