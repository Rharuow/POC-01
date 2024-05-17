"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateToOneWithWhereWithoutCategoriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutCategoriesInput_1 = require("../inputs/ProductUpdateWithoutCategoriesInput");
const ProductWhereInput_1 = require("../inputs/ProductWhereInput");
let ProductUpdateToOneWithWhereWithoutCategoriesInput = class ProductUpdateToOneWithWhereWithoutCategoriesInput {
};
exports.ProductUpdateToOneWithWhereWithoutCategoriesInput = ProductUpdateToOneWithWhereWithoutCategoriesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductUpdateToOneWithWhereWithoutCategoriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutCategoriesInput_1.ProductUpdateWithoutCategoriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutCategoriesInput_1.ProductUpdateWithoutCategoriesInput)
], ProductUpdateToOneWithWhereWithoutCategoriesInput.prototype, "data", void 0);
exports.ProductUpdateToOneWithWhereWithoutCategoriesInput = ProductUpdateToOneWithWhereWithoutCategoriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutCategoriesInput", {})
], ProductUpdateToOneWithWhereWithoutCategoriesInput);
