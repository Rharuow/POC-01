"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsCreateManyProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoriesProductsCreateManyProductInput = class CategoriesProductsCreateManyProductInput {
};
exports.CategoriesProductsCreateManyProductInput = CategoriesProductsCreateManyProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsCreateManyProductInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsCreateManyProductInput.prototype, "categoryName", void 0);
exports.CategoriesProductsCreateManyProductInput = CategoriesProductsCreateManyProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsCreateManyProductInput", {})
], CategoriesProductsCreateManyProductInput);
