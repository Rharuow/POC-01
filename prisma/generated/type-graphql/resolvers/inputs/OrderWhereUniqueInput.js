"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientRelationFilter_1 = require("../inputs/ClientRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const OrderItemListRelationFilter_1 = require("../inputs/OrderItemListRelationFilter");
const OrderWhereInput_1 = require("../inputs/OrderWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
let OrderWhereUniqueInput = class OrderWhereUniqueInput {
};
exports.OrderWhereUniqueInput = OrderWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput_1.OrderWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput_1.OrderWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput_1.OrderWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], OrderWhereUniqueInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], OrderWhereUniqueInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderWhereUniqueInput.prototype, "clientId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemListRelationFilter_1.OrderItemListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemListRelationFilter_1.OrderItemListRelationFilter)
], OrderWhereUniqueInput.prototype, "orderItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientRelationFilter_1.ClientRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientRelationFilter_1.ClientRelationFilter)
], OrderWhereUniqueInput.prototype, "client", void 0);
exports.OrderWhereUniqueInput = OrderWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderWhereUniqueInput", {})
], OrderWhereUniqueInput);
