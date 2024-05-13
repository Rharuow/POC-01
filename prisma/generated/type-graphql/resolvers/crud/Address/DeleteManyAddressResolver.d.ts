import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyAddressArgs } from "./args/DeleteManyAddressArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAddressResolver {
    deleteManyAddress(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAddressArgs): Promise<AffectedRowsOutput>;
}
