"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCategoriesProductsArgs_1 = require("./args/AggregateCategoriesProductsArgs");
const CreateManyCategoriesProductsArgs_1 = require("./args/CreateManyCategoriesProductsArgs");
const CreateOneCategoriesProductsArgs_1 = require("./args/CreateOneCategoriesProductsArgs");
const DeleteManyCategoriesProductsArgs_1 = require("./args/DeleteManyCategoriesProductsArgs");
const DeleteOneCategoriesProductsArgs_1 = require("./args/DeleteOneCategoriesProductsArgs");
const FindFirstCategoriesProductsArgs_1 = require("./args/FindFirstCategoriesProductsArgs");
const FindFirstCategoriesProductsOrThrowArgs_1 = require("./args/FindFirstCategoriesProductsOrThrowArgs");
const FindManyCategoriesProductsArgs_1 = require("./args/FindManyCategoriesProductsArgs");
const FindUniqueCategoriesProductsArgs_1 = require("./args/FindUniqueCategoriesProductsArgs");
const FindUniqueCategoriesProductsOrThrowArgs_1 = require("./args/FindUniqueCategoriesProductsOrThrowArgs");
const GroupByCategoriesProductsArgs_1 = require("./args/GroupByCategoriesProductsArgs");
const UpdateManyCategoriesProductsArgs_1 = require("./args/UpdateManyCategoriesProductsArgs");
const UpdateOneCategoriesProductsArgs_1 = require("./args/UpdateOneCategoriesProductsArgs");
const UpsertOneCategoriesProductsArgs_1 = require("./args/UpsertOneCategoriesProductsArgs");
const helpers_1 = require("../../../helpers");
const CategoriesProducts_1 = require("../../../models/CategoriesProducts");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCategoriesProducts_1 = require("../../outputs/AggregateCategoriesProducts");
const CategoriesProductsGroupBy_1 = require("../../outputs/CategoriesProductsGroupBy");
let CategoriesProductsCrudResolver = class CategoriesProductsCrudResolver {
    async aggregateCategoriesProducts(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCategoriesProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCategoriesProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCategoriesProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCategoriesProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCategoriesProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCategoriesProductsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCategoriesProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCategoriesProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCategoriesProductsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCategoriesProducts(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCategoriesProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCategoriesProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCategoriesProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CategoriesProductsCrudResolver = CategoriesProductsCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCategoriesProducts_1.AggregateCategoriesProducts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCategoriesProductsArgs_1.AggregateCategoriesProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsCrudResolver.prototype, "aggregateCategoriesProducts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCategoriesProductsArgs_1.CreateManyCategoriesProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsCrudResolver.prototype, "createManyCategoriesProducts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CategoriesProducts_1.CategoriesProducts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCategoriesProductsArgs_1.CreateOneCategoriesProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsCrudResolver.prototype, "createOneCategoriesProducts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCategoriesProductsArgs_1.DeleteManyCategoriesProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsCrudResolver.prototype, "deleteManyCategoriesProducts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CategoriesProducts_1.CategoriesProducts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCategoriesProductsArgs_1.DeleteOneCategoriesProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsCrudResolver.prototype, "deleteOneCategoriesProducts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CategoriesProducts_1.CategoriesProducts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCategoriesProductsArgs_1.FindFirstCategoriesProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsCrudResolver.prototype, "findFirstCategoriesProducts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CategoriesProducts_1.CategoriesProducts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCategoriesProductsOrThrowArgs_1.FindFirstCategoriesProductsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsCrudResolver.prototype, "findFirstCategoriesProductsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CategoriesProducts_1.CategoriesProducts], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCategoriesProductsArgs_1.FindManyCategoriesProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsCrudResolver.prototype, "findManyCategoriesProducts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CategoriesProducts_1.CategoriesProducts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCategoriesProductsArgs_1.FindUniqueCategoriesProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsCrudResolver.prototype, "findUniqueCategoriesProducts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CategoriesProducts_1.CategoriesProducts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCategoriesProductsOrThrowArgs_1.FindUniqueCategoriesProductsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsCrudResolver.prototype, "findUniqueCategoriesProductsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CategoriesProductsGroupBy_1.CategoriesProductsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCategoriesProductsArgs_1.GroupByCategoriesProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsCrudResolver.prototype, "groupByCategoriesProducts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCategoriesProductsArgs_1.UpdateManyCategoriesProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsCrudResolver.prototype, "updateManyCategoriesProducts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CategoriesProducts_1.CategoriesProducts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCategoriesProductsArgs_1.UpdateOneCategoriesProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsCrudResolver.prototype, "updateOneCategoriesProducts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CategoriesProducts_1.CategoriesProducts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCategoriesProductsArgs_1.UpsertOneCategoriesProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsCrudResolver.prototype, "upsertOneCategoriesProducts", null);
exports.CategoriesProductsCrudResolver = CategoriesProductsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CategoriesProducts_1.CategoriesProducts)
], CategoriesProductsCrudResolver);
