import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyCategoriesProductsArgs } from "./args/DeleteManyCategoriesProductsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCategoriesProductsResolver {
    deleteManyCategoriesProducts(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCategoriesProductsArgs): Promise<AffectedRowsOutput>;
}
