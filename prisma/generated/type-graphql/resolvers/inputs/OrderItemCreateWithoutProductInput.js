"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemCreateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateNestedOneWithoutOrderItemsInput_1 = require("../inputs/OrderCreateNestedOneWithoutOrderItemsInput");
let OrderItemCreateWithoutProductInput = class OrderItemCreateWithoutProductInput {
};
exports.OrderItemCreateWithoutProductInput = OrderItemCreateWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemCreateWithoutProductInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateWithoutProductInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateWithoutProductInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateWithoutProductInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemCreateWithoutProductInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemCreateWithoutProductInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutOrderItemsInput_1.OrderCreateNestedOneWithoutOrderItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedOneWithoutOrderItemsInput_1.OrderCreateNestedOneWithoutOrderItemsInput)
], OrderItemCreateWithoutProductInput.prototype, "order", void 0);
exports.OrderItemCreateWithoutProductInput = OrderItemCreateWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemCreateWithoutProductInput", {})
], OrderItemCreateWithoutProductInput);
