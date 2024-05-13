"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAddressArgs_1 = require("./args/AggregateAddressArgs");
const CreateManyAddressArgs_1 = require("./args/CreateManyAddressArgs");
const CreateOneAddressArgs_1 = require("./args/CreateOneAddressArgs");
const DeleteManyAddressArgs_1 = require("./args/DeleteManyAddressArgs");
const DeleteOneAddressArgs_1 = require("./args/DeleteOneAddressArgs");
const FindFirstAddressArgs_1 = require("./args/FindFirstAddressArgs");
const FindFirstAddressOrThrowArgs_1 = require("./args/FindFirstAddressOrThrowArgs");
const FindManyAddressArgs_1 = require("./args/FindManyAddressArgs");
const FindUniqueAddressArgs_1 = require("./args/FindUniqueAddressArgs");
const FindUniqueAddressOrThrowArgs_1 = require("./args/FindUniqueAddressOrThrowArgs");
const GroupByAddressArgs_1 = require("./args/GroupByAddressArgs");
const UpdateManyAddressArgs_1 = require("./args/UpdateManyAddressArgs");
const UpdateOneAddressArgs_1 = require("./args/UpdateOneAddressArgs");
const UpsertOneAddressArgs_1 = require("./args/UpsertOneAddressArgs");
const helpers_1 = require("../../../helpers");
const Address_1 = require("../../../models/Address");
const AddressGroupBy_1 = require("../../outputs/AddressGroupBy");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAddress_1 = require("../../outputs/AggregateAddress");
let AddressCrudResolver = class AddressCrudResolver {
    async aggregateAddress(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).address.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAddressOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async addresses(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async address(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByAddress(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.AddressCrudResolver = AddressCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAddress_1.AggregateAddress, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAddressArgs_1.AggregateAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "aggregateAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAddressArgs_1.CreateManyAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "createManyAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Address_1.Address, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneAddressArgs_1.CreateOneAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "createOneAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAddressArgs_1.DeleteManyAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "deleteManyAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Address_1.Address, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAddressArgs_1.DeleteOneAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "deleteOneAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Address_1.Address, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAddressArgs_1.FindFirstAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "findFirstAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Address_1.Address, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAddressOrThrowArgs_1.FindFirstAddressOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "findFirstAddressOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Address_1.Address], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAddressArgs_1.FindManyAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "addresses", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Address_1.Address, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAddressArgs_1.FindUniqueAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "address", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Address_1.Address, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAddressOrThrowArgs_1.FindUniqueAddressOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "getAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AddressGroupBy_1.AddressGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAddressArgs_1.GroupByAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "groupByAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAddressArgs_1.UpdateManyAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "updateManyAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Address_1.Address, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneAddressArgs_1.UpdateOneAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "updateOneAddress", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Address_1.Address, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAddressArgs_1.UpsertOneAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressCrudResolver.prototype, "upsertOneAddress", null);
exports.AddressCrudResolver = AddressCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], AddressCrudResolver);
