"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCategoriesProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneCategoriesProductsArgs_1 = require("./args/DeleteOneCategoriesProductsArgs");
const CategoriesProducts_1 = require("../../../models/CategoriesProducts");
const helpers_1 = require("../../../helpers");
let DeleteOneCategoriesProductsResolver = class DeleteOneCategoriesProductsResolver {
    async deleteOneCategoriesProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneCategoriesProductsResolver = DeleteOneCategoriesProductsResolver;
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
], DeleteOneCategoriesProductsResolver.prototype, "deleteOneCategoriesProducts", null);
exports.DeleteOneCategoriesProductsResolver = DeleteOneCategoriesProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CategoriesProducts_1.CategoriesProducts)
], DeleteOneCategoriesProductsResolver);
