"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressNullableRelationFilter_1 = require("../inputs/AddressNullableRelationFilter");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const DocumentNullableRelationFilter_1 = require("../inputs/DocumentNullableRelationFilter");
const OrderListRelationFilter_1 = require("../inputs/OrderListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ClientWhereUniqueInput = class ClientWhereUniqueInput {
};
exports.ClientWhereUniqueInput = ClientWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientWhereUniqueInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientWhereUniqueInput.prototype, "documentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientWhereUniqueInput.prototype, "addressId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientWhereInput_1.ClientWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClientWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientWhereInput_1.ClientWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClientWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientWhereInput_1.ClientWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ClientWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ClientWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ClientWhereUniqueInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ClientWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ClientWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentNullableRelationFilter_1.DocumentNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentNullableRelationFilter_1.DocumentNullableRelationFilter)
], ClientWhereUniqueInput.prototype, "document", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressNullableRelationFilter_1.AddressNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressNullableRelationFilter_1.AddressNullableRelationFilter)
], ClientWhereUniqueInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderListRelationFilter_1.OrderListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderListRelationFilter_1.OrderListRelationFilter)
], ClientWhereUniqueInput.prototype, "Orders", void 0);
exports.ClientWhereUniqueInput = ClientWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientWhereUniqueInput", {})
], ClientWhereUniqueInput);
