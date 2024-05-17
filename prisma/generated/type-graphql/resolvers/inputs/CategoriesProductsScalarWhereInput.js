"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
let CategoriesProductsScalarWhereInput = class CategoriesProductsScalarWhereInput {
};
exports.CategoriesProductsScalarWhereInput = CategoriesProductsScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoriesProductsScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoriesProductsScalarWhereInput.prototype, "categoryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoriesProductsScalarWhereInput.prototype, "productId", void 0);
exports.CategoriesProductsScalarWhereInput = CategoriesProductsScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsScalarWhereInput", {})
], CategoriesProductsScalarWhereInput);
