"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemCreateNestedManyWithoutOrderInput_1 = require("../inputs/OrderItemCreateNestedManyWithoutOrderInput");
let OrderCreateWithoutClientInput = class OrderCreateWithoutClientInput {
};
exports.OrderCreateWithoutClientInput = OrderCreateWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutClientInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutClientInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutClientInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutClientInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateWithoutClientInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateNestedManyWithoutOrderInput_1.OrderItemCreateNestedManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemCreateNestedManyWithoutOrderInput_1.OrderItemCreateNestedManyWithoutOrderInput)
], OrderCreateWithoutClientInput.prototype, "orderItems", void 0);
exports.OrderCreateWithoutClientInput = OrderCreateWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutClientInput", {})
], OrderCreateWithoutClientInput);
