"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OrderItemSumOrderByAggregateInput = class OrderItemSumOrderByAggregateInput {
};
exports.OrderItemSumOrderByAggregateInput = OrderItemSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemSumOrderByAggregateInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemSumOrderByAggregateInput.prototype, "totalPrice", void 0);
exports.OrderItemSumOrderByAggregateInput = OrderItemSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemSumOrderByAggregateInput", {})
], OrderItemSumOrderByAggregateInput);
