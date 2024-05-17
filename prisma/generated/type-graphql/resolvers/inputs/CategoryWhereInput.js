"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsListRelationFilter_1 = require("../inputs/CategoriesProductsListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let CategoryWhereInput = class CategoryWhereInput {
};
exports.CategoryWhereInput = CategoryWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CategoryWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], CategoryWhereInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CategoryWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsListRelationFilter_1.CategoriesProductsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsListRelationFilter_1.CategoriesProductsListRelationFilter)
], CategoryWhereInput.prototype, "produtos", void 0);
exports.CategoryWhereInput = CategoryWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryWhereInput", {})
], CategoryWhereInput);
