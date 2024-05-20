"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Order_1 = require("../../../models/Order");
const OrderItem_1 = require("../../../models/OrderItem");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let OrderItemRelationsResolver = class OrderItemRelationsResolver {
    async product(orderItem, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.findUniqueOrThrow({
            where: {
                id: orderItem.id,
            },
        }).product({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async order(orderItem, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.findUniqueOrThrow({
            where: {
                id: orderItem.id,
            },
        }).order({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.OrderItemRelationsResolver = OrderItemRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Product_1.Product, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OrderItem_1.OrderItem, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemRelationsResolver.prototype, "product", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Order_1.Order, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OrderItem_1.OrderItem, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderItemRelationsResolver.prototype, "order", null);
exports.OrderItemRelationsResolver = OrderItemRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderItem_1.OrderItem)
], OrderItemRelationsResolver);
