"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProducts_1 = require("../../../models/CategoriesProducts");
const Category_1 = require("../../../models/Category");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let CategoriesProductsRelationsResolver = class CategoriesProductsRelationsResolver {
    async category(categoriesProducts, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.findUniqueOrThrow({
            where: {
                id: categoriesProducts.id,
            },
        }).category({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async product(categoriesProducts, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.findUniqueOrThrow({
            where: {
                id: categoriesProducts.id,
            },
        }).product({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CategoriesProductsRelationsResolver = CategoriesProductsRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Category_1.Category, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CategoriesProducts_1.CategoriesProducts, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsRelationsResolver.prototype, "category", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Product_1.Product, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CategoriesProducts_1.CategoriesProducts, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesProductsRelationsResolver.prototype, "product", null);
exports.CategoriesProductsRelationsResolver = CategoriesProductsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CategoriesProducts_1.CategoriesProducts)
], CategoriesProductsRelationsResolver);
