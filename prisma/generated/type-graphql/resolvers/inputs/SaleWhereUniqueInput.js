"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientRelationFilter_1 = require("../inputs/ClientRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const OrderListRelationFilter_1 = require("../inputs/OrderListRelationFilter");
const SaleWhereInput_1 = require("../inputs/SaleWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
let SaleWhereUniqueInput = class SaleWhereUniqueInput {
};
exports.SaleWhereUniqueInput = SaleWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleWhereInput_1.SaleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleWhereInput_1.SaleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleWhereInput_1.SaleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SaleWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], SaleWhereUniqueInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SaleWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], SaleWhereUniqueInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SaleWhereUniqueInput.prototype, "clientId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderListRelationFilter_1.OrderListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderListRelationFilter_1.OrderListRelationFilter)
], SaleWhereUniqueInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientRelationFilter_1.ClientRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientRelationFilter_1.ClientRelationFilter)
], SaleWhereUniqueInput.prototype, "client", void 0);
exports.SaleWhereUniqueInput = SaleWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleWhereUniqueInput", {})
], SaleWhereUniqueInput);
