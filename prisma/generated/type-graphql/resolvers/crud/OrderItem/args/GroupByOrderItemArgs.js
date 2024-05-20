"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOrderItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemOrderByWithAggregationInput_1 = require("../../../inputs/OrderItemOrderByWithAggregationInput");
const OrderItemScalarWhereWithAggregatesInput_1 = require("../../../inputs/OrderItemScalarWhereWithAggregatesInput");
const OrderItemWhereInput_1 = require("../../../inputs/OrderItemWhereInput");
const OrderItemScalarFieldEnum_1 = require("../../../../enums/OrderItemScalarFieldEnum");
let GroupByOrderItemArgs = class GroupByOrderItemArgs {
};
exports.GroupByOrderItemArgs = GroupByOrderItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereInput_1.OrderItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemWhereInput_1.OrderItemWhereInput)
], GroupByOrderItemArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemOrderByWithAggregationInput_1.OrderItemOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOrderItemArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemScalarFieldEnum_1.OrderItemScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOrderItemArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemScalarWhereWithAggregatesInput_1.OrderItemScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemScalarWhereWithAggregatesInput_1.OrderItemScalarWhereWithAggregatesInput)
], GroupByOrderItemArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOrderItemArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOrderItemArgs.prototype, "skip", void 0);
exports.GroupByOrderItemArgs = GroupByOrderItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByOrderItemArgs);
