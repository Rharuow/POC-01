"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithWhereUniqueWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutProductInput_1 = require("../inputs/OrderCreateWithoutProductInput");
const OrderUpdateWithoutProductInput_1 = require("../inputs/OrderUpdateWithoutProductInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpsertWithWhereUniqueWithoutProductInput = class OrderUpsertWithWhereUniqueWithoutProductInput {
};
exports.OrderUpsertWithWhereUniqueWithoutProductInput = OrderUpsertWithWhereUniqueWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpsertWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutProductInput_1.OrderUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutProductInput_1.OrderUpdateWithoutProductInput)
], OrderUpsertWithWhereUniqueWithoutProductInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutProductInput_1.OrderCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutProductInput_1.OrderCreateWithoutProductInput)
], OrderUpsertWithWhereUniqueWithoutProductInput.prototype, "create", void 0);
exports.OrderUpsertWithWhereUniqueWithoutProductInput = OrderUpsertWithWhereUniqueWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutProductInput", {})
], OrderUpsertWithWhereUniqueWithoutProductInput);
