"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsUpdateManyWithoutCategoryNestedInput_1 = require("../inputs/CategoriesProductsUpdateManyWithoutCategoryNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CategoryUpdateInput = class CategoryUpdateInput {
};
exports.CategoryUpdateInput = CategoryUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CategoryUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CategoryUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], CategoryUpdateInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CategoryUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CategoryUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsUpdateManyWithoutCategoryNestedInput_1.CategoriesProductsUpdateManyWithoutCategoryNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsUpdateManyWithoutCategoryNestedInput_1.CategoriesProductsUpdateManyWithoutCategoryNestedInput)
], CategoryUpdateInput.prototype, "produtos", void 0);
exports.CategoryUpdateInput = CategoryUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateInput", {})
], CategoryUpdateInput);
