"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoriesProductsCreateManyInput = class CategoriesProductsCreateManyInput {
};
exports.CategoriesProductsCreateManyInput = CategoriesProductsCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsCreateManyInput.prototype, "categoryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsCreateManyInput.prototype, "productId", void 0);
exports.CategoriesProductsCreateManyInput = CategoriesProductsCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsCreateManyInput", {})
], CategoriesProductsCreateManyInput);
