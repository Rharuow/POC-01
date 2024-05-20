"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemAvgOrderByAggregateInput_1 = require("../inputs/OrderItemAvgOrderByAggregateInput");
const OrderItemCountOrderByAggregateInput_1 = require("../inputs/OrderItemCountOrderByAggregateInput");
const OrderItemMaxOrderByAggregateInput_1 = require("../inputs/OrderItemMaxOrderByAggregateInput");
const OrderItemMinOrderByAggregateInput_1 = require("../inputs/OrderItemMinOrderByAggregateInput");
const OrderItemSumOrderByAggregateInput_1 = require("../inputs/OrderItemSumOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrderItemOrderByWithAggregationInput = class OrderItemOrderByWithAggregationInput {
};
exports.OrderItemOrderByWithAggregationInput = OrderItemOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], OrderItemOrderByWithAggregationInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemOrderByWithAggregationInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemOrderByWithAggregationInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemOrderByWithAggregationInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemOrderByWithAggregationInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCountOrderByAggregateInput_1.OrderItemCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemCountOrderByAggregateInput_1.OrderItemCountOrderByAggregateInput)
], OrderItemOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemAvgOrderByAggregateInput_1.OrderItemAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemAvgOrderByAggregateInput_1.OrderItemAvgOrderByAggregateInput)
], OrderItemOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemMaxOrderByAggregateInput_1.OrderItemMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemMaxOrderByAggregateInput_1.OrderItemMaxOrderByAggregateInput)
], OrderItemOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemMinOrderByAggregateInput_1.OrderItemMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemMinOrderByAggregateInput_1.OrderItemMinOrderByAggregateInput)
], OrderItemOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemSumOrderByAggregateInput_1.OrderItemSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemSumOrderByAggregateInput_1.OrderItemSumOrderByAggregateInput)
], OrderItemOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.OrderItemOrderByWithAggregationInput = OrderItemOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemOrderByWithAggregationInput", {})
], OrderItemOrderByWithAggregationInput);
