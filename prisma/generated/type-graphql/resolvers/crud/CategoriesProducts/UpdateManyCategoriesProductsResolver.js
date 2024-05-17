"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCategoriesProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyCategoriesProductsArgs_1 = require("./args/UpdateManyCategoriesProductsArgs");
const CategoriesProducts_1 = require("../../../models/CategoriesProducts");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCategoriesProductsResolver = class UpdateManyCategoriesProductsResolver {
    async updateManyCategoriesProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyCategoriesProductsResolver = UpdateManyCategoriesProductsResolver;
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
], UpdateManyCategoriesProductsResolver.prototype, "updateManyCategoriesProducts", null);
exports.UpdateManyCategoriesProductsResolver = UpdateManyCategoriesProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CategoriesProducts_1.CategoriesProducts)
], UpdateManyCategoriesProductsResolver);
