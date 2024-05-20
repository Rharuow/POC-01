"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderItemSumAggregate = class OrderItemSumAggregate {
};
exports.OrderItemSumAggregate = OrderItemSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemSumAggregate.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemSumAggregate.prototype, "totalPrice", void 0);
exports.OrderItemSumAggregate = OrderItemSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderItemSumAggregate", {})
], OrderItemSumAggregate);
