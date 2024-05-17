"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsUpdateWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateOneRequiredWithoutCategoriesNestedInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutCategoriesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CategoriesProductsUpdateWithoutCategoryInput = class CategoriesProductsUpdateWithoutCategoryInput {
};
exports.CategoriesProductsUpdateWithoutCategoryInput = CategoriesProductsUpdateWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CategoriesProductsUpdateWithoutCategoryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutCategoriesNestedInput_1.ProductUpdateOneRequiredWithoutCategoriesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateOneRequiredWithoutCategoriesNestedInput_1.ProductUpdateOneRequiredWithoutCategoriesNestedInput)
], CategoriesProductsUpdateWithoutCategoryInput.prototype, "product", void 0);
exports.CategoriesProductsUpdateWithoutCategoryInput = CategoriesProductsUpdateWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsUpdateWithoutCategoryInput", {})
], CategoriesProductsUpdateWithoutCategoryInput);
