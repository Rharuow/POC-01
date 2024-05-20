"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderItemAvgAggregate = class OrderItemAvgAggregate {
};
exports.OrderItemAvgAggregate = OrderItemAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemAvgAggregate.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemAvgAggregate.prototype, "totalPrice", void 0);
exports.OrderItemAvgAggregate = OrderItemAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderItemAvgAggregate", {})
], OrderItemAvgAggregate);
