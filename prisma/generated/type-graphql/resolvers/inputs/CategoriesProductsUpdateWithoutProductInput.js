"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsUpdateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateOneRequiredWithoutProdutosNestedInput_1 = require("../inputs/CategoryUpdateOneRequiredWithoutProdutosNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CategoriesProductsUpdateWithoutProductInput = class CategoriesProductsUpdateWithoutProductInput {
};
exports.CategoriesProductsUpdateWithoutProductInput = CategoriesProductsUpdateWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CategoriesProductsUpdateWithoutProductInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutProdutosNestedInput_1.CategoryUpdateOneRequiredWithoutProdutosNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateOneRequiredWithoutProdutosNestedInput_1.CategoryUpdateOneRequiredWithoutProdutosNestedInput)
], CategoriesProductsUpdateWithoutProductInput.prototype, "category", void 0);
exports.CategoriesProductsUpdateWithoutProductInput = CategoriesProductsUpdateWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsUpdateWithoutProductInput", {})
], CategoriesProductsUpdateWithoutProductInput);
