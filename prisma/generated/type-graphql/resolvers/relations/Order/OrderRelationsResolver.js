"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Client_1 = require("../../../models/Client");
const Order_1 = require("../../../models/Order");
const OrderItem_1 = require("../../../models/OrderItem");
const OrderOrderItemsArgs_1 = require("./args/OrderOrderItemsArgs");
const helpers_1 = require("../../../helpers");
let OrderRelationsResolver = class OrderRelationsResolver {
    async orderItems(order, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUniqueOrThrow({
            where: {
                id: order.id,
            },
        }).orderItems({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async client(order, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUniqueOrThrow({
            where: {
                id: order.id,
            },
        }).client({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.OrderRelationsResolver = OrderRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderItem_1.OrderItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order, Object, Object, OrderOrderItemsArgs_1.OrderOrderItemsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "orderItems", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Client_1.Client, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "client", null);
exports.OrderRelationsResolver = OrderRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], OrderRelationsResolver);
