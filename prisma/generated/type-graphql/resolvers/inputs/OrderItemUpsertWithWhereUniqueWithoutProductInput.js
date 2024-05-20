"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemUpsertWithWhereUniqueWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemCreateWithoutProductInput_1 = require("../inputs/OrderItemCreateWithoutProductInput");
const OrderItemUpdateWithoutProductInput_1 = require("../inputs/OrderItemUpdateWithoutProductInput");
const OrderItemWhereUniqueInput_1 = require("../inputs/OrderItemWhereUniqueInput");
let OrderItemUpsertWithWhereUniqueWithoutProductInput = class OrderItemUpsertWithWhereUniqueWithoutProductInput {
};
exports.OrderItemUpsertWithWhereUniqueWithoutProductInput = OrderItemUpsertWithWhereUniqueWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput)
], OrderItemUpsertWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemUpdateWithoutProductInput_1.OrderItemUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemUpdateWithoutProductInput_1.OrderItemUpdateWithoutProductInput)
], OrderItemUpsertWithWhereUniqueWithoutProductInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateWithoutProductInput_1.OrderItemCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemCreateWithoutProductInput_1.OrderItemCreateWithoutProductInput)
], OrderItemUpsertWithWhereUniqueWithoutProductInput.prototype, "create", void 0);
exports.OrderItemUpsertWithWhereUniqueWithoutProductInput = OrderItemUpsertWithWhereUniqueWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemUpsertWithWhereUniqueWithoutProductInput", {})
], OrderItemUpsertWithWhereUniqueWithoutProductInput);
