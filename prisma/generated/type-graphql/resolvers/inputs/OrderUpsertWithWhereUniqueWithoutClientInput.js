"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithWhereUniqueWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutClientInput_1 = require("../inputs/OrderCreateWithoutClientInput");
const OrderUpdateWithoutClientInput_1 = require("../inputs/OrderUpdateWithoutClientInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpsertWithWhereUniqueWithoutClientInput = class OrderUpsertWithWhereUniqueWithoutClientInput {
};
exports.OrderUpsertWithWhereUniqueWithoutClientInput = OrderUpsertWithWhereUniqueWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpsertWithWhereUniqueWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutClientInput_1.OrderUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutClientInput_1.OrderUpdateWithoutClientInput)
], OrderUpsertWithWhereUniqueWithoutClientInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutClientInput_1.OrderCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutClientInput_1.OrderCreateWithoutClientInput)
], OrderUpsertWithWhereUniqueWithoutClientInput.prototype, "create", void 0);
exports.OrderUpsertWithWhereUniqueWithoutClientInput = OrderUpsertWithWhereUniqueWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutClientInput", {})
], OrderUpsertWithWhereUniqueWithoutClientInput);
