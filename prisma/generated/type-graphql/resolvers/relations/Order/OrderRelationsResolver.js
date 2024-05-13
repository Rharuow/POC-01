"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Order_1 = require("../../../models/Order");
const Product_1 = require("../../../models/Product");
const Sale_1 = require("../../../models/Sale");
const helpers_1 = require("../../../helpers");
let OrderRelationsResolver = class OrderRelationsResolver {
    async product(order, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUniqueOrThrow({
            where: {
                id: order.id,
            },
        }).product({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async sale(order, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUniqueOrThrow({
            where: {
                id: order.id,
            },
        }).sale({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.OrderRelationsResolver = OrderRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Product_1.Product, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "product", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Sale_1.Sale, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "sale", null);
exports.OrderRelationsResolver = OrderRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], OrderRelationsResolver);
