"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const OrderUpdateOneRequiredWithoutOrderItemsNestedInput_1 = require("../inputs/OrderUpdateOneRequiredWithoutOrderItemsNestedInput");
const ProductUpdateOneRequiredWithoutOrderItemsNestedInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutOrderItemsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let OrderItemUpdateInput = class OrderItemUpdateInput {
};
exports.OrderItemUpdateInput = OrderItemUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OrderItemUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderItemUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], OrderItemUpdateInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderItemUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OrderItemUpdateInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], OrderItemUpdateInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutOrderItemsNestedInput_1.ProductUpdateOneRequiredWithoutOrderItemsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateOneRequiredWithoutOrderItemsNestedInput_1.ProductUpdateOneRequiredWithoutOrderItemsNestedInput)
], OrderItemUpdateInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutOrderItemsNestedInput_1.OrderUpdateOneRequiredWithoutOrderItemsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateOneRequiredWithoutOrderItemsNestedInput_1.OrderUpdateOneRequiredWithoutOrderItemsNestedInput)
], OrderItemUpdateInput.prototype, "order", void 0);
exports.OrderItemUpdateInput = OrderItemUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemUpdateInput", {})
], OrderItemUpdateInput);
