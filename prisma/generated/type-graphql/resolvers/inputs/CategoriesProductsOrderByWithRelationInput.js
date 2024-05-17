"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryOrderByWithRelationInput_1 = require("../inputs/CategoryOrderByWithRelationInput");
const ProductOrderByWithRelationInput_1 = require("../inputs/ProductOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CategoriesProductsOrderByWithRelationInput = class CategoriesProductsOrderByWithRelationInput {
};
exports.CategoriesProductsOrderByWithRelationInput = CategoriesProductsOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsOrderByWithRelationInput.prototype, "categoryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsOrderByWithRelationInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryOrderByWithRelationInput_1.CategoryOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryOrderByWithRelationInput_1.CategoryOrderByWithRelationInput)
], CategoriesProductsOrderByWithRelationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput)
], CategoriesProductsOrderByWithRelationInput.prototype, "product", void 0);
exports.CategoriesProductsOrderByWithRelationInput = CategoriesProductsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsOrderByWithRelationInput", {})
], CategoriesProductsOrderByWithRelationInput);
