"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithWhereUniqueWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateWithoutClientInput_1 = require("../inputs/OrderUpdateWithoutClientInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateWithWhereUniqueWithoutClientInput = class OrderUpdateWithWhereUniqueWithoutClientInput {
};
exports.OrderUpdateWithWhereUniqueWithoutClientInput = OrderUpdateWithWhereUniqueWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateWithWhereUniqueWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutClientInput_1.OrderUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutClientInput_1.OrderUpdateWithoutClientInput)
], OrderUpdateWithWhereUniqueWithoutClientInput.prototype, "data", void 0);
exports.OrderUpdateWithWhereUniqueWithoutClientInput = OrderUpdateWithWhereUniqueWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutClientInput", {})
], OrderUpdateWithWhereUniqueWithoutClientInput);
