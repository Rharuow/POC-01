"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemCreateWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedOneWithoutOrderItemsInput_1 = require("../inputs/ProductCreateNestedOneWithoutOrderItemsInput");
let OrderItemCreateWithoutOrderInput = class OrderItemCreateWithoutOrderInput {
};
exports.OrderItemCreateWithoutOrderInput = OrderItemCreateWithoutOrderInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemCreateWithoutOrderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateWithoutOrderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateWithoutOrderInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateWithoutOrderInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemCreateWithoutOrderInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemCreateWithoutOrderInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOrderItemsInput_1.ProductCreateNestedOneWithoutOrderItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedOneWithoutOrderItemsInput_1.ProductCreateNestedOneWithoutOrderItemsInput)
], OrderItemCreateWithoutOrderInput.prototype, "product", void 0);
exports.OrderItemCreateWithoutOrderInput = OrderItemCreateWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemCreateWithoutOrderInput", {})
], OrderItemCreateWithoutOrderInput);
