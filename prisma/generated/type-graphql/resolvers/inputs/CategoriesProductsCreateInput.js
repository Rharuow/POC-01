"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateNestedOneWithoutProdutosInput_1 = require("../inputs/CategoryCreateNestedOneWithoutProdutosInput");
const ProductCreateNestedOneWithoutCategoriesInput_1 = require("../inputs/ProductCreateNestedOneWithoutCategoriesInput");
let CategoriesProductsCreateInput = class CategoriesProductsCreateInput {
};
exports.CategoriesProductsCreateInput = CategoriesProductsCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutProdutosInput_1.CategoryCreateNestedOneWithoutProdutosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutProdutosInput_1.CategoryCreateNestedOneWithoutProdutosInput)
], CategoriesProductsCreateInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutCategoriesInput_1.ProductCreateNestedOneWithoutCategoriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedOneWithoutCategoriesInput_1.ProductCreateNestedOneWithoutCategoriesInput)
], CategoriesProductsCreateInput.prototype, "product", void 0);
exports.CategoriesProductsCreateInput = CategoriesProductsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsCreateInput", {})
], CategoriesProductsCreateInput);
