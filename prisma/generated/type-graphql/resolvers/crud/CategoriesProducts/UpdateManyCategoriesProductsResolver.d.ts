import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyCategoriesProductsArgs } from "./args/UpdateManyCategoriesProductsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCategoriesProductsResolver {
    updateManyCategoriesProducts(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCategoriesProductsArgs): Promise<AffectedRowsOutput>;
}
