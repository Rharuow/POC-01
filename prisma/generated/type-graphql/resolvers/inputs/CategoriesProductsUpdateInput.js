"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateOneRequiredWithoutProdutosNestedInput_1 = require("../inputs/CategoryUpdateOneRequiredWithoutProdutosNestedInput");
const ProductUpdateOneRequiredWithoutCategoriesNestedInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutCategoriesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CategoriesProductsUpdateInput = class CategoriesProductsUpdateInput {
};
exports.CategoriesProductsUpdateInput = CategoriesProductsUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CategoriesProductsUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutProdutosNestedInput_1.CategoryUpdateOneRequiredWithoutProdutosNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateOneRequiredWithoutProdutosNestedInput_1.CategoryUpdateOneRequiredWithoutProdutosNestedInput)
], CategoriesProductsUpdateInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutCategoriesNestedInput_1.ProductUpdateOneRequiredWithoutCategoriesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateOneRequiredWithoutCategoriesNestedInput_1.ProductUpdateOneRequiredWithoutCategoriesNestedInput)
], CategoriesProductsUpdateInput.prototype, "product", void 0);
exports.CategoriesProductsUpdateInput = CategoriesProductsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsUpdateInput", {})
], CategoriesProductsUpdateInput);
