"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrderItem = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemAvgAggregate_1 = require("../outputs/OrderItemAvgAggregate");
const OrderItemCountAggregate_1 = require("../outputs/OrderItemCountAggregate");
const OrderItemMaxAggregate_1 = require("../outputs/OrderItemMaxAggregate");
const OrderItemMinAggregate_1 = require("../outputs/OrderItemMinAggregate");
const OrderItemSumAggregate_1 = require("../outputs/OrderItemSumAggregate");
let AggregateOrderItem = class AggregateOrderItem {
};
exports.AggregateOrderItem = AggregateOrderItem;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCountAggregate_1.OrderItemCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemCountAggregate_1.OrderItemCountAggregate)
], AggregateOrderItem.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemAvgAggregate_1.OrderItemAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemAvgAggregate_1.OrderItemAvgAggregate)
], AggregateOrderItem.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemSumAggregate_1.OrderItemSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemSumAggregate_1.OrderItemSumAggregate)
], AggregateOrderItem.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemMinAggregate_1.OrderItemMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemMinAggregate_1.OrderItemMinAggregate)
], AggregateOrderItem.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemMaxAggregate_1.OrderItemMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemMaxAggregate_1.OrderItemMaxAggregate)
], AggregateOrderItem.prototype, "_max", void 0);
exports.AggregateOrderItem = AggregateOrderItem = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateOrderItem", {})
], AggregateOrderItem);
