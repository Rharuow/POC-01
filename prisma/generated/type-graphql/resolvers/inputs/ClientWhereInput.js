"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressRelationFilter_1 = require("../inputs/AddressRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const DocumentRelationFilter_1 = require("../inputs/DocumentRelationFilter");
const SaleListRelationFilter_1 = require("../inputs/SaleListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
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
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ClientWhereInput.prototype, "documentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ClientWhereInput.prototype, "addressId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentRelationFilter_1.DocumentRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentRelationFilter_1.DocumentRelationFilter)
], ClientWhereInput.prototype, "document", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressRelationFilter_1.AddressRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressRelationFilter_1.AddressRelationFilter)
], ClientWhereInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleListRelationFilter_1.SaleListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleListRelationFilter_1.SaleListRelationFilter)
], ClientWhereInput.prototype, "sales", void 0);
exports.ClientWhereInput = ClientWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientWhereInput", {})
], ClientWhereInput);
