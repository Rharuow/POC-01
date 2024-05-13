import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrderOrThrowArgs } from "./args/FindUniqueOrderOrThrowArgs";
import { Order } from "../../../models/Order";
export declare class FindUniqueOrderOrThrowResolver {
    getOrder(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrderOrThrowArgs): Promise<Order | null>;
}
