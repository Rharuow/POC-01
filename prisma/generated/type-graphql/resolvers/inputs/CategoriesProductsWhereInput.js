"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryRelationFilter_1 = require("../inputs/CategoryRelationFilter");
const ProductRelationFilter_1 = require("../inputs/ProductRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let CategoriesProductsWhereInput = class CategoriesProductsWhereInput {
};
exports.CategoriesProductsWhereInput = CategoriesProductsWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoriesProductsWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoriesProductsWhereInput.prototype, "categoryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoriesProductsWhereInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryRelationFilter_1.CategoryRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryRelationFilter_1.CategoryRelationFilter)
], CategoriesProductsWhereInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductRelationFilter_1.ProductRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductRelationFilter_1.ProductRelationFilter)
], CategoriesProductsWhereInput.prototype, "product", void 0);
exports.CategoriesProductsWhereInput = CategoriesProductsWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsWhereInput", {})
], CategoriesProductsWhereInput);
