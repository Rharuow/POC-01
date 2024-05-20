"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateNestedOneWithoutOrdersInput_1 = require("../inputs/ClientCreateNestedOneWithoutOrdersInput");
const OrderItemCreateNestedManyWithoutOrderInput_1 = require("../inputs/OrderItemCreateNestedManyWithoutOrderInput");
let OrderCreateInput = class OrderCreateInput {
};
exports.OrderCreateInput = OrderCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateNestedManyWithoutOrderInput_1.OrderItemCreateNestedManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemCreateNestedManyWithoutOrderInput_1.OrderItemCreateNestedManyWithoutOrderInput)
], OrderCreateInput.prototype, "orderItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutOrdersInput_1.ClientCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateNestedOneWithoutOrdersInput_1.ClientCreateNestedOneWithoutOrdersInput)
], OrderCreateInput.prototype, "client", void 0);
exports.OrderCreateInput = OrderCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateInput", {})
], OrderCreateInput);
