"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrderItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateOrderItemArgs_1 = require("./args/AggregateOrderItemArgs");
const OrderItem_1 = require("../../../models/OrderItem");
const AggregateOrderItem_1 = require("../../outputs/AggregateOrderItem");
const helpers_1 = require("../../../helpers");
let AggregateOrderItemResolver = class AggregateOrderItemResolver {
    async aggregateOrderItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateOrderItemResolver = AggregateOrderItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOrderItem_1.AggregateOrderItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOrderItemArgs_1.AggregateOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateOrderItemResolver.prototype, "aggregateOrderItem", null);
exports.AggregateOrderItemResolver = AggregateOrderItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderItem_1.OrderItem)
], AggregateOrderItemResolver);
