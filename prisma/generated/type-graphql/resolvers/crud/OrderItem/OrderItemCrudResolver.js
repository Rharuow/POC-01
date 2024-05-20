"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateOrderItemArgs_1 = require("./args/AggregateOrderItemArgs");
const CreateManyOrderItemArgs_1 = require("./args/CreateManyOrderItemArgs");
const CreateOneOrderItemArgs_1 = require("./args/CreateOneOrderItemArgs");
const DeleteManyOrderItemArgs_1 = require("./args/DeleteManyOrderItemArgs");
const DeleteOneOrderItemArgs_1 = require("./args/DeleteOneOrderItemArgs");
const FindFirstOrderItemArgs_1 = require("./args/FindFirstOrderItemArgs");
const FindFirstOrderItemOrThrowArgs_1 = require("./args/FindFirstOrderItemOrThrowArgs");
const FindManyOrderItemArgs_1 = require("./args/FindManyOrderItemArgs");
const FindUniqueOrderItemArgs_1 = require("./args/FindUniqueOrderItemArgs");
const FindUniqueOrderItemOrThrowArgs_1 = require("./args/FindUniqueOrderItemOrThrowArgs");
const GroupByOrderItemArgs_1 = require("./args/GroupByOrderItemArgs");
const UpdateManyOrderItemArgs_1 = require("./args/UpdateManyOrderItemArgs");
const UpdateOneOrderItemArgs_1 = require("./args/UpdateOneOrderItemArgs");
const UpsertOneOrderItemArgs_1 = require("./args/UpsertOneOrderItemArgs");
const helpers_1 = require("../../../helpers");
const OrderItem_1 = require("../../../models/OrderItem");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOrderItem_1 = require("../../outputs/AggregateOrderItem");
const OrderItemGroupBy_1 = require("../../outputs/OrderItemGroupBy");
let OrderItemCrudResolver = class OrderItemCrudResolver {
    async aggregateOrderItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOrderItemOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async orderItems(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async orderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByOrderItem(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.OrderItemCrudResolver = OrderItemCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOrderItem_1.AggregateOrderItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOrderItemArgs_1.AggregateOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "aggregateOrderItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyOrderItemArgs_1.CreateManyOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "createManyOrderItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderItem_1.OrderItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneOrderItemArgs_1.CreateOneOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "createOneOrderItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyOrderItemArgs_1.DeleteManyOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "deleteManyOrderItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderItem_1.OrderItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneOrderItemArgs_1.DeleteOneOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "deleteOneOrderItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OrderItem_1.OrderItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOrderItemArgs_1.FindFirstOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "findFirstOrderItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OrderItem_1.OrderItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOrderItemOrThrowArgs_1.FindFirstOrderItemOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "findFirstOrderItemOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OrderItem_1.OrderItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyOrderItemArgs_1.FindManyOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "orderItems", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OrderItem_1.OrderItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOrderItemArgs_1.FindUniqueOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "orderItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OrderItem_1.OrderItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOrderItemOrThrowArgs_1.FindUniqueOrderItemOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "getOrderItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OrderItemGroupBy_1.OrderItemGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOrderItemArgs_1.GroupByOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "groupByOrderItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyOrderItemArgs_1.UpdateManyOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "updateManyOrderItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderItem_1.OrderItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneOrderItemArgs_1.UpdateOneOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "updateOneOrderItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderItem_1.OrderItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneOrderItemArgs_1.UpsertOneOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "upsertOneOrderItem", null);
exports.OrderItemCrudResolver = OrderItemCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderItem_1.OrderItem)
], OrderItemCrudResolver);
