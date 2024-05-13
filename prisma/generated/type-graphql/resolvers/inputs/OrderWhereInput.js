"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const ProductRelationFilter_1 = require("../inputs/ProductRelationFilter");
const SaleRelationFilter_1 = require("../inputs/SaleRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let OrderWhereInput = class OrderWhereInput {
};
exports.OrderWhereInput = OrderWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], OrderWhereInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrderWhereInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], OrderWhereInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderWhereInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderWhereInput.prototype, "saleId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductRelationFilter_1.ProductRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductRelationFilter_1.ProductRelationFilter)
], OrderWhereInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleRelationFilter_1.SaleRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleRelationFilter_1.SaleRelationFilter)
], OrderWhereInput.prototype, "sale", void 0);
exports.OrderWhereInput = OrderWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderWhereInput", {})
], OrderWhereInput);
