"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsListRelationFilter_1 = require("../inputs/CategoriesProductsListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const OrderItemListRelationFilter_1 = require("../inputs/OrderItemListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ProductWhereInput = class ProductWhereInput {
};
exports.ProductWhereInput = ProductWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ProductWhereInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ProductWhereInput.prototype, "inventory_quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], ProductWhereInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsListRelationFilter_1.CategoriesProductsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsListRelationFilter_1.CategoriesProductsListRelationFilter)
], ProductWhereInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemListRelationFilter_1.OrderItemListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemListRelationFilter_1.OrderItemListRelationFilter)
], ProductWhereInput.prototype, "orderItems", void 0);
exports.ProductWhereInput = ProductWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductWhereInput", {})
], ProductWhereInput);
