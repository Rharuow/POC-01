"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProducts_1 = require("../../../models/CategoriesProducts");
const OrderItem_1 = require("../../../models/OrderItem");
const Product_1 = require("../../../models/Product");
const ProductCategoriesArgs_1 = require("./args/ProductCategoriesArgs");
const ProductOrderItemsArgs_1 = require("./args/ProductOrderItemsArgs");
const helpers_1 = require("../../../helpers");
let ProductRelationsResolver = class ProductRelationsResolver {
    async categories(product, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUniqueOrThrow({
            where: {
                id: product.id,
            },
        }).categories({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async orderItems(product, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUniqueOrThrow({
            where: {
                id: product.id,
            },
        }).orderItems({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.ProductRelationsResolver = ProductRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [CategoriesProducts_1.CategoriesProducts], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product, Object, Object, ProductCategoriesArgs_1.ProductCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "categories", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderItem_1.OrderItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product, Object, Object, ProductOrderItemsArgs_1.ProductOrderItemsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "orderItems", null);
exports.ProductRelationsResolver = ProductRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], ProductRelationsResolver);
