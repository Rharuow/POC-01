"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCategoriesProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCategoriesProductsArgs_1 = require("./args/FindFirstCategoriesProductsArgs");
const CategoriesProducts_1 = require("../../../models/CategoriesProducts");
const helpers_1 = require("../../../helpers");
let FindFirstCategoriesProductsResolver = class FindFirstCategoriesProductsResolver {
    async findFirstCategoriesProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstCategoriesProductsResolver = FindFirstCategoriesProductsResolver;
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
], FindFirstCategoriesProductsResolver.prototype, "findFirstCategoriesProducts", null);
exports.FindFirstCategoriesProductsResolver = FindFirstCategoriesProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CategoriesProducts_1.CategoriesProducts)
], FindFirstCategoriesProductsResolver);
