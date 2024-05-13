import type { GraphQLResolveInfo } from "graphql";
import { CreateManySaleArgs } from "./args/CreateManySaleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySaleResolver {
    createManySale(ctx: any, info: GraphQLResolveInfo, args: CreateManySaleArgs): Promise<AffectedRowsOutput>;
}
