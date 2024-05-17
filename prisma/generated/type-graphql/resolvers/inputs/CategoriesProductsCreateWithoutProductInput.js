"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsCreateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateNestedOneWithoutProdutosInput_1 = require("../inputs/CategoryCreateNestedOneWithoutProdutosInput");
let CategoriesProductsCreateWithoutProductInput = class CategoriesProductsCreateWithoutProductInput {
};
exports.CategoriesProductsCreateWithoutProductInput = CategoriesProductsCreateWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsCreateWithoutProductInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutProdutosInput_1.CategoryCreateNestedOneWithoutProdutosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutProdutosInput_1.CategoryCreateNestedOneWithoutProdutosInput)
], CategoriesProductsCreateWithoutProductInput.prototype, "category", void 0);
exports.CategoriesProductsCreateWithoutProductInput = CategoriesProductsCreateWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsCreateWithoutProductInput", {})
], CategoriesProductsCreateWithoutProductInput);
