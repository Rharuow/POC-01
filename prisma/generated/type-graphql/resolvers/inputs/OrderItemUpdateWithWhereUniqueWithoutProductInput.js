"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemUpdateWithWhereUniqueWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemUpdateWithoutProductInput_1 = require("../inputs/OrderItemUpdateWithoutProductInput");
const OrderItemWhereUniqueInput_1 = require("../inputs/OrderItemWhereUniqueInput");
let OrderItemUpdateWithWhereUniqueWithoutProductInput = class OrderItemUpdateWithWhereUniqueWithoutProductInput {
};
exports.OrderItemUpdateWithWhereUniqueWithoutProductInput = OrderItemUpdateWithWhereUniqueWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput)
], OrderItemUpdateWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemUpdateWithoutProductInput_1.OrderItemUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemUpdateWithoutProductInput_1.OrderItemUpdateWithoutProductInput)
], OrderItemUpdateWithWhereUniqueWithoutProductInput.prototype, "data", void 0);
exports.OrderItemUpdateWithWhereUniqueWithoutProductInput = OrderItemUpdateWithWhereUniqueWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemUpdateWithWhereUniqueWithoutProductInput", {})
], OrderItemUpdateWithWhereUniqueWithoutProductInput);
