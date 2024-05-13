"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithWhereUniqueWithoutSaleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateWithoutSaleInput_1 = require("../inputs/OrderUpdateWithoutSaleInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateWithWhereUniqueWithoutSaleInput = class OrderUpdateWithWhereUniqueWithoutSaleInput {
};
exports.OrderUpdateWithWhereUniqueWithoutSaleInput = OrderUpdateWithWhereUniqueWithoutSaleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateWithWhereUniqueWithoutSaleInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutSaleInput_1.OrderUpdateWithoutSaleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutSaleInput_1.OrderUpdateWithoutSaleInput)
], OrderUpdateWithWhereUniqueWithoutSaleInput.prototype, "data", void 0);
exports.OrderUpdateWithWhereUniqueWithoutSaleInput = OrderUpdateWithWhereUniqueWithoutSaleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutSaleInput", {})
], OrderUpdateWithWhereUniqueWithoutSaleInput);
