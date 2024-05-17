"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCategoriesProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCategoriesProductsArgs_1 = require("./args/GroupByCategoriesProductsArgs");
const CategoriesProducts_1 = require("../../../models/CategoriesProducts");
const CategoriesProductsGroupBy_1 = require("../../outputs/CategoriesProductsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCategoriesProductsResolver = class GroupByCategoriesProductsResolver {
    async groupByCategoriesProducts(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByCategoriesProductsResolver = GroupByCategoriesProductsResolver;
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
], GroupByCategoriesProductsResolver.prototype, "groupByCategoriesProducts", null);
exports.GroupByCategoriesProductsResolver = GroupByCategoriesProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CategoriesProducts_1.CategoriesProducts)
], GroupByCategoriesProductsResolver);
