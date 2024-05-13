import type { GraphQLResolveInfo } from "graphql";
import { AggregateOrderArgs } from "./args/AggregateOrderArgs";
import { CreateManyOrderArgs } from "./args/CreateManyOrderArgs";
import { CreateOneOrderArgs } from "./args/CreateOneOrderArgs";
import { DeleteManyOrderArgs } from "./args/DeleteManyOrderArgs";
import { DeleteOneOrderArgs } from "./args/DeleteOneOrderArgs";
import { FindFirstOrderArgs } from "./args/FindFirstOrderArgs";
import { FindFirstOrderOrThrowArgs } from "./args/FindFirstOrderOrThrowArgs";
import { FindManyOrderArgs } from "./args/FindManyOrderArgs";
import { FindUniqueOrderArgs } from "./args/FindUniqueOrderArgs";
import { FindUniqueOrderOrThrowArgs } from "./args/FindUniqueOrderOrThrowArgs";
import { GroupByOrderArgs } from "./args/GroupByOrderArgs";
import { UpdateManyOrderArgs } from "./args/UpdateManyOrderArgs";
import { UpdateOneOrderArgs } from "./args/UpdateOneOrderArgs";
import { UpsertOneOrderArgs } from "./args/UpsertOneOrderArgs";
import { Order } from "../../../models/Order";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateOrder } from "../../outputs/AggregateOrder";
import { OrderGroupBy } from "../../outputs/OrderGroupBy";
export declare class OrderCrudResolver {
    aggregateOrder(ctx: any, info: GraphQLResolveInfo, args: AggregateOrderArgs): Promise<AggregateOrder>;
    createManyOrder(ctx: any, info: GraphQLResolveInfo, args: CreateManyOrderArgs): Promise<AffectedRowsOutput>;
    createOneOrder(ctx: any, info: GraphQLResolveInfo, args: CreateOneOrderArgs): Promise<Order>;
    deleteManyOrder(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOrderArgs): Promise<AffectedRowsOutput>;
    deleteOneOrder(ctx: any, info: GraphQLResolveInfo, args: DeleteOneOrderArgs): Promise<Order | null>;
    findFirstOrder(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrderArgs): Promise<Order | null>;
    findFirstOrderOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrderOrThrowArgs): Promise<Order | null>;
    orders(ctx: any, info: GraphQLResolveInfo, args: FindManyOrderArgs): Promise<Order[]>;
    order(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrderArgs): Promise<Order | null>;
    getOrder(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrderOrThrowArgs): Promise<Order | null>;
    groupByOrder(ctx: any, info: GraphQLResolveInfo, args: GroupByOrderArgs): Promise<OrderGroupBy[]>;
    updateManyOrder(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOrderArgs): Promise<AffectedRowsOutput>;
    updateOneOrder(ctx: any, info: GraphQLResolveInfo, args: UpdateOneOrderArgs): Promise<Order | null>;
    upsertOneOrder(ctx: any, info: GraphQLResolveInfo, args: UpsertOneOrderArgs): Promise<Order>;
}
