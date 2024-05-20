"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateNestedOneWithoutOrderItemsInput_1 = require("../inputs/OrderCreateNestedOneWithoutOrderItemsInput");
const ProductCreateNestedOneWithoutOrderItemsInput_1 = require("../inputs/ProductCreateNestedOneWithoutOrderItemsInput");
let OrderItemCreateInput = class OrderItemCreateInput {
};
exports.OrderItemCreateInput = OrderItemCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemCreateInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemCreateInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOrderItemsInput_1.ProductCreateNestedOneWithoutOrderItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedOneWithoutOrderItemsInput_1.ProductCreateNestedOneWithoutOrderItemsInput)
], OrderItemCreateInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutOrderItemsInput_1.OrderCreateNestedOneWithoutOrderItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedOneWithoutOrderItemsInput_1.OrderCreateNestedOneWithoutOrderItemsInput)
], OrderItemCreateInput.prototype, "order", void 0);
exports.OrderItemCreateInput = OrderItemCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemCreateInput", {})
], OrderItemCreateInput);
