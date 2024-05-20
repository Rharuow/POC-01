"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOrderItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByOrderItemArgs_1 = require("./args/GroupByOrderItemArgs");
const OrderItem_1 = require("../../../models/OrderItem");
const OrderItemGroupBy_1 = require("../../outputs/OrderItemGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByOrderItemResolver = class GroupByOrderItemResolver {
    async groupByOrderItem(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByOrderItemResolver = GroupByOrderItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OrderItemGroupBy_1.OrderItemGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOrderItemArgs_1.GroupByOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByOrderItemResolver.prototype, "groupByOrderItem", null);
exports.GroupByOrderItemResolver = GroupByOrderItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderItem_1.OrderItem)
], GroupByOrderItemResolver);
