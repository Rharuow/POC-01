"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let CategoriesProductsScalarWhereWithAggregatesInput = class CategoriesProductsScalarWhereWithAggregatesInput {
};
exports.CategoriesProductsScalarWhereWithAggregatesInput = CategoriesProductsScalarWhereWithAggregatesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], CategoriesProductsScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], CategoriesProductsScalarWhereWithAggregatesInput.prototype, "categoryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], CategoriesProductsScalarWhereWithAggregatesInput.prototype, "productId", void 0);
exports.CategoriesProductsScalarWhereWithAggregatesInput = CategoriesProductsScalarWhereWithAggregatesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsScalarWhereWithAggregatesInput", {})
], CategoriesProductsScalarWhereWithAggregatesInput);
