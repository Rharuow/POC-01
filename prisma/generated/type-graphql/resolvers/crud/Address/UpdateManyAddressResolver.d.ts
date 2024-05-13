import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyAddressArgs } from "./args/UpdateManyAddressArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAddressResolver {
    updateManyAddress(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAddressArgs): Promise<AffectedRowsOutput>;
}
