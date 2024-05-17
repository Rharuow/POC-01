"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsCreateManyCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoriesProductsCreateManyCategoryInput = class CategoriesProductsCreateManyCategoryInput {
};
exports.CategoriesProductsCreateManyCategoryInput = CategoriesProductsCreateManyCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsCreateManyCategoryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsCreateManyCategoryInput.prototype, "productId", void 0);
exports.CategoriesProductsCreateManyCategoryInput = CategoriesProductsCreateManyCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsCreateManyCategoryInput", {})
], CategoriesProductsCreateManyCategoryInput);
