"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressNullableRelationFilter_1 = require("../inputs/AddressNullableRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const DocumentNullableRelationFilter_1 = require("../inputs/DocumentNullableRelationFilter");
const OrderListRelationFilter_1 = require("../inputs/OrderListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ClientWhereInput = class ClientWhereInput {
};
exports.ClientWhereInput = ClientWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClientWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClientWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClientWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ClientWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ClientWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ClientWhereInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ClientWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ClientWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ClientWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClientWhereInput.prototype, "documentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ClientWhereInput.prototype, "addressId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentNullableRelationFilter_1.DocumentNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentNullableRelationFilter_1.DocumentNullableRelationFilter)
], ClientWhereInput.prototype, "document", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressNullableRelationFilter_1.AddressNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressNullableRelationFilter_1.AddressNullableRelationFilter)
], ClientWhereInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderListRelationFilter_1.OrderListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderListRelationFilter_1.OrderListRelationFilter)
], ClientWhereInput.prototype, "Orders", void 0);
exports.ClientWhereInput = ClientWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientWhereInput", {})
], ClientWhereInput);
