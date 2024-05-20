"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemUpdateWithWhereUniqueWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemUpdateWithoutOrderInput_1 = require("../inputs/OrderItemUpdateWithoutOrderInput");
const OrderItemWhereUniqueInput_1 = require("../inputs/OrderItemWhereUniqueInput");
let OrderItemUpdateWithWhereUniqueWithoutOrderInput = class OrderItemUpdateWithWhereUniqueWithoutOrderInput {
};
exports.OrderItemUpdateWithWhereUniqueWithoutOrderInput = OrderItemUpdateWithWhereUniqueWithoutOrderInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput)
], OrderItemUpdateWithWhereUniqueWithoutOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemUpdateWithoutOrderInput_1.OrderItemUpdateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemUpdateWithoutOrderInput_1.OrderItemUpdateWithoutOrderInput)
], OrderItemUpdateWithWhereUniqueWithoutOrderInput.prototype, "data", void 0);
exports.OrderItemUpdateWithWhereUniqueWithoutOrderInput = OrderItemUpdateWithWhereUniqueWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemUpdateWithWhereUniqueWithoutOrderInput", {})
], OrderItemUpdateWithWhereUniqueWithoutOrderInput);
