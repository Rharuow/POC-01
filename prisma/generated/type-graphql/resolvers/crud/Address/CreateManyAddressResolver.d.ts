import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAddressArgs } from "./args/CreateManyAddressArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAddressResolver {
    createManyAddress(ctx: any, info: GraphQLResolveInfo, args: CreateManyAddressArgs): Promise<AffectedRowsOutput>;
}
