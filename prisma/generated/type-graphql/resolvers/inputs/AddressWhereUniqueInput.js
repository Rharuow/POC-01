"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressWhereInput_1 = require("../inputs/AddressWhereInput");
const ClientRelationFilter_1 = require("../inputs/ClientRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
let AddressWhereUniqueInput = class AddressWhereUniqueInput {
};
exports.AddressWhereUniqueInput = AddressWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressWhereUniqueInput.prototype, "billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressWhereUniqueInput.prototype, "delivery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressWhereUniqueInput.prototype, "clientId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressWhereInput_1.AddressWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressWhereInput_1.AddressWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressWhereInput_1.AddressWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], AddressWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], AddressWhereUniqueInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], AddressWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientRelationFilter_1.ClientRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientRelationFilter_1.ClientRelationFilter)
], AddressWhereUniqueInput.prototype, "client", void 0);
exports.AddressWhereUniqueInput = AddressWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressWhereUniqueInput", {})
], AddressWhereUniqueInput);
