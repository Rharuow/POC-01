"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemAvgAggregate_1 = require("../outputs/OrderItemAvgAggregate");
const OrderItemCountAggregate_1 = require("../outputs/OrderItemCountAggregate");
const OrderItemMaxAggregate_1 = require("../outputs/OrderItemMaxAggregate");
const OrderItemMinAggregate_1 = require("../outputs/OrderItemMinAggregate");
const OrderItemSumAggregate_1 = require("../outputs/OrderItemSumAggregate");
let OrderItemGroupBy = class OrderItemGroupBy {
};
exports.OrderItemGroupBy = OrderItemGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemGroupBy.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemGroupBy.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemGroupBy.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemGroupBy.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemGroupBy.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCountAggregate_1.OrderItemCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemCountAggregate_1.OrderItemCountAggregate)
], OrderItemGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemAvgAggregate_1.OrderItemAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemAvgAggregate_1.OrderItemAvgAggregate)
], OrderItemGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemSumAggregate_1.OrderItemSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemSumAggregate_1.OrderItemSumAggregate)
], OrderItemGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemMinAggregate_1.OrderItemMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemMinAggregate_1.OrderItemMinAggregate)
], OrderItemGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemMaxAggregate_1.OrderItemMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemMaxAggregate_1.OrderItemMaxAggregate)
], OrderItemGroupBy.prototype, "_max", void 0);
exports.OrderItemGroupBy = OrderItemGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderItemGroupBy", {})
], OrderItemGroupBy);
