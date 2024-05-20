"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateToOneWithWhereWithoutOrderItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateWithoutOrderItemsInput_1 = require("../inputs/OrderUpdateWithoutOrderItemsInput");
const OrderWhereInput_1 = require("../inputs/OrderWhereInput");
let OrderUpdateToOneWithWhereWithoutOrderItemsInput = class OrderUpdateToOneWithWhereWithoutOrderItemsInput {
};
exports.OrderUpdateToOneWithWhereWithoutOrderItemsInput = OrderUpdateToOneWithWhereWithoutOrderItemsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereInput_1.OrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereInput_1.OrderWhereInput)
], OrderUpdateToOneWithWhereWithoutOrderItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutOrderItemsInput_1.OrderUpdateWithoutOrderItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutOrderItemsInput_1.OrderUpdateWithoutOrderItemsInput)
], OrderUpdateToOneWithWhereWithoutOrderItemsInput.prototype, "data", void 0);
exports.OrderUpdateToOneWithWhereWithoutOrderItemsInput = OrderUpdateToOneWithWhereWithoutOrderItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateToOneWithWhereWithoutOrderItemsInput", {})
], OrderUpdateToOneWithWhereWithoutOrderItemsInput);
