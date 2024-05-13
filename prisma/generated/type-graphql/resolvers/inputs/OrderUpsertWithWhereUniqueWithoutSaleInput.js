"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithWhereUniqueWithoutSaleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutSaleInput_1 = require("../inputs/OrderCreateWithoutSaleInput");
const OrderUpdateWithoutSaleInput_1 = require("../inputs/OrderUpdateWithoutSaleInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpsertWithWhereUniqueWithoutSaleInput = class OrderUpsertWithWhereUniqueWithoutSaleInput {
};
exports.OrderUpsertWithWhereUniqueWithoutSaleInput = OrderUpsertWithWhereUniqueWithoutSaleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpsertWithWhereUniqueWithoutSaleInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutSaleInput_1.OrderUpdateWithoutSaleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutSaleInput_1.OrderUpdateWithoutSaleInput)
], OrderUpsertWithWhereUniqueWithoutSaleInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutSaleInput_1.OrderCreateWithoutSaleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutSaleInput_1.OrderCreateWithoutSaleInput)
], OrderUpsertWithWhereUniqueWithoutSaleInput.prototype, "create", void 0);
exports.OrderUpsertWithWhereUniqueWithoutSaleInput = OrderUpsertWithWhereUniqueWithoutSaleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutSaleInput", {})
], OrderUpsertWithWhereUniqueWithoutSaleInput);
