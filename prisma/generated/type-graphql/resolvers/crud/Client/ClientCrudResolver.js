"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateClientArgs_1 = require("./args/AggregateClientArgs");
const CreateManyClientArgs_1 = require("./args/CreateManyClientArgs");
const CreateOneClientArgs_1 = require("./args/CreateOneClientArgs");
const DeleteManyClientArgs_1 = require("./args/DeleteManyClientArgs");
const DeleteOneClientArgs_1 = require("./args/DeleteOneClientArgs");
const FindFirstClientArgs_1 = require("./args/FindFirstClientArgs");
const FindFirstClientOrThrowArgs_1 = require("./args/FindFirstClientOrThrowArgs");
const FindManyClientArgs_1 = require("./args/FindManyClientArgs");
const FindUniqueClientArgs_1 = require("./args/FindUniqueClientArgs");
const FindUniqueClientOrThrowArgs_1 = require("./args/FindUniqueClientOrThrowArgs");
const GroupByClientArgs_1 = require("./args/GroupByClientArgs");
const UpdateManyClientArgs_1 = require("./args/UpdateManyClientArgs");
const UpdateOneClientArgs_1 = require("./args/UpdateOneClientArgs");
const UpsertOneClientArgs_1 = require("./args/UpsertOneClientArgs");
const helpers_1 = require("../../../helpers");
const Client_1 = require("../../../models/Client");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateClient_1 = require("../../outputs/AggregateClient");
const ClientGroupBy_1 = require("../../outputs/ClientGroupBy");
let ClientCrudResolver = class ClientCrudResolver {
    async aggregateClient(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).client.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyClient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneClient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyClient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneClient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstClient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstClientOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async clients(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async client(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getClient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByClient(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyClient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneClient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneClient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.ClientCrudResolver = ClientCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateClient_1.AggregateClient, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateClientArgs_1.AggregateClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientCrudResolver.prototype, "aggregateClient", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyClientArgs_1.CreateManyClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientCrudResolver.prototype, "createManyClient", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Client_1.Client, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneClientArgs_1.CreateOneClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientCrudResolver.prototype, "createOneClient", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyClientArgs_1.DeleteManyClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientCrudResolver.prototype, "deleteManyClient", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Client_1.Client, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneClientArgs_1.DeleteOneClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientCrudResolver.prototype, "deleteOneClient", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Client_1.Client, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstClientArgs_1.FindFirstClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientCrudResolver.prototype, "findFirstClient", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Client_1.Client, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstClientOrThrowArgs_1.FindFirstClientOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientCrudResolver.prototype, "findFirstClientOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Client_1.Client], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyClientArgs_1.FindManyClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientCrudResolver.prototype, "clients", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Client_1.Client, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueClientArgs_1.FindUniqueClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientCrudResolver.prototype, "client", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Client_1.Client, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueClientOrThrowArgs_1.FindUniqueClientOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientCrudResolver.prototype, "getClient", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ClientGroupBy_1.ClientGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByClientArgs_1.GroupByClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientCrudResolver.prototype, "groupByClient", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyClientArgs_1.UpdateManyClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientCrudResolver.prototype, "updateManyClient", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Client_1.Client, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneClientArgs_1.UpdateOneClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientCrudResolver.prototype, "updateOneClient", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Client_1.Client, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneClientArgs_1.UpsertOneClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientCrudResolver.prototype, "upsertOneClient", null);
exports.ClientCrudResolver = ClientCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Client_1.Client)
], ClientCrudResolver);
