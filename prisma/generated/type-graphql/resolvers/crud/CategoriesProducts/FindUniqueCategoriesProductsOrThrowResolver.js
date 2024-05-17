"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCategoriesProductsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCategoriesProductsOrThrowArgs_1 = require("./args/FindUniqueCategoriesProductsOrThrowArgs");
const CategoriesProducts_1 = require("../../../models/CategoriesProducts");
const helpers_1 = require("../../../helpers");
let FindUniqueCategoriesProductsOrThrowResolver = class FindUniqueCategoriesProductsOrThrowResolver {
    async findUniqueCategoriesProductsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueCategoriesProductsOrThrowResolver = FindUniqueCategoriesProductsOrThrowResolver;
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
], FindUniqueCategoriesProductsOrThrowResolver.prototype, "findUniqueCategoriesProductsOrThrow", null);
exports.FindUniqueCategoriesProductsOrThrowResolver = FindUniqueCategoriesProductsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CategoriesProducts_1.CategoriesProducts)
], FindUniqueCategoriesProductsOrThrowResolver);
