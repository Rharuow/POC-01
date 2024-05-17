"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsUpdateManyWithoutProductNestedInput_1 = require("../inputs/CategoriesProductsUpdateManyWithoutProductNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProductUpdateWithoutOrdersInput = class ProductUpdateWithoutOrdersInput {
};
exports.ProductUpdateWithoutOrdersInput = ProductUpdateWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutOrdersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutOrdersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutOrdersInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutOrdersInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutOrdersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutOrdersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutOrdersInput.prototype, "inventory_quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsUpdateManyWithoutProductNestedInput_1.CategoriesProductsUpdateManyWithoutProductNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsUpdateManyWithoutProductNestedInput_1.CategoriesProductsUpdateManyWithoutProductNestedInput)
], ProductUpdateWithoutOrdersInput.prototype, "categories", void 0);
exports.ProductUpdateWithoutOrdersInput = ProductUpdateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithoutOrdersInput", {})
], ProductUpdateWithoutOrdersInput);
