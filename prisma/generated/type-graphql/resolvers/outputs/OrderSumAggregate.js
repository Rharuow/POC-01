"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderSumAggregate = class OrderSumAggregate {
};
exports.OrderSumAggregate = OrderSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderSumAggregate.prototype, "totalPrice", void 0);
exports.OrderSumAggregate = OrderSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderSumAggregate", {})
], OrderSumAggregate);
