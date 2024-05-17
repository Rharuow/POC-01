import type { GraphQLResolveInfo } from "graphql";
import { CreateManyCategoriesProductsArgs } from "./args/CreateManyCategoriesProductsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCategoriesProductsResolver {
    createManyCategoriesProducts(ctx: any, info: GraphQLResolveInfo, args: CreateManyCategoriesProductsArgs): Promise<AffectedRowsOutput>;
}
