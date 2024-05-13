import type { GraphQLResolveInfo } from "graphql";
import { FindFirstOrderOrThrowArgs } from "./args/FindFirstOrderOrThrowArgs";
import { Order } from "../../../models/Order";
export declare class FindFirstOrderOrThrowResolver {
    findFirstOrderOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrderOrThrowArgs): Promise<Order | null>;
}
