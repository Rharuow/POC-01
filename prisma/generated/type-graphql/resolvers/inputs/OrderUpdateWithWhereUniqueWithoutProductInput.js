"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithWhereUniqueWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateWithoutProductInput_1 = require("../inputs/OrderUpdateWithoutProductInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateWithWhereUniqueWithoutProductInput = class OrderUpdateWithWhereUniqueWithoutProductInput {
};
exports.OrderUpdateWithWhereUniqueWithoutProductInput = OrderUpdateWithWhereUniqueWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutProductInput_1.OrderUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutProductInput_1.OrderUpdateWithoutProductInput)
], OrderUpdateWithWhereUniqueWithoutProductInput.prototype, "data", void 0);
exports.OrderUpdateWithWhereUniqueWithoutProductInput = OrderUpdateWithWhereUniqueWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutProductInput", {})
], OrderUpdateWithWhereUniqueWithoutProductInput);
