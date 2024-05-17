"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCategoriesProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCategoriesProductsArgs_1 = require("./args/AggregateCategoriesProductsArgs");
const CategoriesProducts_1 = require("../../../models/CategoriesProducts");
const AggregateCategoriesProducts_1 = require("../../outputs/AggregateCategoriesProducts");
const helpers_1 = require("../../../helpers");
let AggregateCategoriesProductsResolver = class AggregateCategoriesProductsResolver {
    async aggregateCategoriesProducts(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateCategoriesProductsResolver = AggregateCategoriesProductsResolver;
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
], AggregateCategoriesProductsResolver.prototype, "aggregateCategoriesProducts", null);
exports.AggregateCategoriesProductsResolver = AggregateCategoriesProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CategoriesProducts_1.CategoriesProducts)
], AggregateCategoriesProductsResolver);
