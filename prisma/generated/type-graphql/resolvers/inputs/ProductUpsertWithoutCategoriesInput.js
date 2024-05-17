"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithoutCategoriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutCategoriesInput_1 = require("../inputs/ProductCreateWithoutCategoriesInput");
const ProductUpdateWithoutCategoriesInput_1 = require("../inputs/ProductUpdateWithoutCategoriesInput");
const ProductWhereInput_1 = require("../inputs/ProductWhereInput");
let ProductUpsertWithoutCategoriesInput = class ProductUpsertWithoutCategoriesInput {
};
exports.ProductUpsertWithoutCategoriesInput = ProductUpsertWithoutCategoriesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutCategoriesInput_1.ProductUpdateWithoutCategoriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutCategoriesInput_1.ProductUpdateWithoutCategoriesInput)
], ProductUpsertWithoutCategoriesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutCategoriesInput_1.ProductCreateWithoutCategoriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutCategoriesInput_1.ProductCreateWithoutCategoriesInput)
], ProductUpsertWithoutCategoriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductUpsertWithoutCategoriesInput.prototype, "where", void 0);
exports.ProductUpsertWithoutCategoriesInput = ProductUpsertWithoutCategoriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithoutCategoriesInput", {})
], ProductUpsertWithoutCategoriesInput);
