"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSaleArgs_1 = require("./args/AggregateSaleArgs");
const CreateManySaleArgs_1 = require("./args/CreateManySaleArgs");
const CreateOneSaleArgs_1 = require("./args/CreateOneSaleArgs");
const DeleteManySaleArgs_1 = require("./args/DeleteManySaleArgs");
const DeleteOneSaleArgs_1 = require("./args/DeleteOneSaleArgs");
const FindFirstSaleArgs_1 = require("./args/FindFirstSaleArgs");
const FindFirstSaleOrThrowArgs_1 = require("./args/FindFirstSaleOrThrowArgs");
const FindManySaleArgs_1 = require("./args/FindManySaleArgs");
const FindUniqueSaleArgs_1 = require("./args/FindUniqueSaleArgs");
const FindUniqueSaleOrThrowArgs_1 = require("./args/FindUniqueSaleOrThrowArgs");
const GroupBySaleArgs_1 = require("./args/GroupBySaleArgs");
const UpdateManySaleArgs_1 = require("./args/UpdateManySaleArgs");
const UpdateOneSaleArgs_1 = require("./args/UpdateOneSaleArgs");
const UpsertOneSaleArgs_1 = require("./args/UpsertOneSaleArgs");
const helpers_1 = require("../../../helpers");
const Sale_1 = require("../../../models/Sale");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSale_1 = require("../../outputs/AggregateSale");
const SaleGroupBy_1 = require("../../outputs/SaleGroupBy");
let SaleCrudResolver = class SaleCrudResolver {
    async aggregateSale(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManySale(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSale(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySale(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSale(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSale(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSaleOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async sales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async sale(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getSale(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySale(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySale(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSale(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSale(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.SaleCrudResolver = SaleCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSale_1.AggregateSale, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSaleArgs_1.AggregateSaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleCrudResolver.prototype, "aggregateSale", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySaleArgs_1.CreateManySaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleCrudResolver.prototype, "createManySale", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sale_1.Sale, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSaleArgs_1.CreateOneSaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleCrudResolver.prototype, "createOneSale", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySaleArgs_1.DeleteManySaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleCrudResolver.prototype, "deleteManySale", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sale_1.Sale, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSaleArgs_1.DeleteOneSaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleCrudResolver.prototype, "deleteOneSale", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Sale_1.Sale, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSaleArgs_1.FindFirstSaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleCrudResolver.prototype, "findFirstSale", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Sale_1.Sale, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSaleOrThrowArgs_1.FindFirstSaleOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleCrudResolver.prototype, "findFirstSaleOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Sale_1.Sale], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySaleArgs_1.FindManySaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleCrudResolver.prototype, "sales", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Sale_1.Sale, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSaleArgs_1.FindUniqueSaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleCrudResolver.prototype, "sale", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Sale_1.Sale, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSaleOrThrowArgs_1.FindUniqueSaleOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleCrudResolver.prototype, "getSale", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SaleGroupBy_1.SaleGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySaleArgs_1.GroupBySaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleCrudResolver.prototype, "groupBySale", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySaleArgs_1.UpdateManySaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleCrudResolver.prototype, "updateManySale", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sale_1.Sale, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSaleArgs_1.UpdateOneSaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleCrudResolver.prototype, "updateOneSale", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sale_1.Sale, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSaleArgs_1.UpsertOneSaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleCrudResolver.prototype, "upsertOneSale", null);
exports.SaleCrudResolver = SaleCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sale_1.Sale)
], SaleCrudResolver);
