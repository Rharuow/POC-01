"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCategoriesProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneCategoriesProductsArgs_1 = require("./args/CreateOneCategoriesProductsArgs");
const CategoriesProducts_1 = require("../../../models/CategoriesProducts");
const helpers_1 = require("../../../helpers");
let CreateOneCategoriesProductsResolver = class CreateOneCategoriesProductsResolver {
    async createOneCategoriesProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categoriesProducts.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneCategoriesProductsResolver = CreateOneCategoriesProductsResolver;
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
], CreateOneCategoriesProductsResolver.prototype, "createOneCategoriesProducts", null);
exports.CreateOneCategoriesProductsResolver = CreateOneCategoriesProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CategoriesProducts_1.CategoriesProducts)
], CreateOneCategoriesProductsResolver);
