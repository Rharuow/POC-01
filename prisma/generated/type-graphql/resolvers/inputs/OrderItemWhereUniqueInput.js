"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const OrderItemWhereInput_1 = require("../inputs/OrderItemWhereInput");
const OrderRelationFilter_1 = require("../inputs/OrderRelationFilter");
const ProductRelationFilter_1 = require("../inputs/ProductRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let OrderItemWhereUniqueInput = class OrderItemWhereUniqueInput {
};
exports.OrderItemWhereUniqueInput = OrderItemWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereInput_1.OrderItemWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereInput_1.OrderItemWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereInput_1.OrderItemWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderItemWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], OrderItemWhereUniqueInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderItemWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrderItemWhereUniqueInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], OrderItemWhereUniqueInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderItemWhereUniqueInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderItemWhereUniqueInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductRelationFilter_1.ProductRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductRelationFilter_1.ProductRelationFilter)
], OrderItemWhereUniqueInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderRelationFilter_1.OrderRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderRelationFilter_1.OrderRelationFilter)
], OrderItemWhereUniqueInput.prototype, "order", void 0);
exports.OrderItemWhereUniqueInput = OrderItemWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemWhereUniqueInput", {})
], OrderItemWhereUniqueInput);
