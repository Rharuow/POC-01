"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutOrderItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateNestedOneWithoutOrdersInput_1 = require("../inputs/ClientCreateNestedOneWithoutOrdersInput");
let OrderCreateWithoutOrderItemsInput = class OrderCreateWithoutOrderItemsInput {
};
exports.OrderCreateWithoutOrderItemsInput = OrderCreateWithoutOrderItemsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutOrderItemsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutOrderItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutOrderItemsInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutOrderItemsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateWithoutOrderItemsInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutOrdersInput_1.ClientCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateNestedOneWithoutOrdersInput_1.ClientCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutOrderItemsInput.prototype, "client", void 0);
exports.OrderCreateWithoutOrderItemsInput = OrderCreateWithoutOrderItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutOrderItemsInput", {})
], OrderCreateWithoutOrderItemsInput);
