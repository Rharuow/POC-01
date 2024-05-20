"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemUpsertWithWhereUniqueWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemCreateWithoutOrderInput_1 = require("../inputs/OrderItemCreateWithoutOrderInput");
const OrderItemUpdateWithoutOrderInput_1 = require("../inputs/OrderItemUpdateWithoutOrderInput");
const OrderItemWhereUniqueInput_1 = require("../inputs/OrderItemWhereUniqueInput");
let OrderItemUpsertWithWhereUniqueWithoutOrderInput = class OrderItemUpsertWithWhereUniqueWithoutOrderInput {
};
exports.OrderItemUpsertWithWhereUniqueWithoutOrderInput = OrderItemUpsertWithWhereUniqueWithoutOrderInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput)
], OrderItemUpsertWithWhereUniqueWithoutOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemUpdateWithoutOrderInput_1.OrderItemUpdateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemUpdateWithoutOrderInput_1.OrderItemUpdateWithoutOrderInput)
], OrderItemUpsertWithWhereUniqueWithoutOrderInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateWithoutOrderInput_1.OrderItemCreateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemCreateWithoutOrderInput_1.OrderItemCreateWithoutOrderInput)
], OrderItemUpsertWithWhereUniqueWithoutOrderInput.prototype, "create", void 0);
exports.OrderItemUpsertWithWhereUniqueWithoutOrderInput = OrderItemUpsertWithWhereUniqueWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemUpsertWithWhereUniqueWithoutOrderInput", {})
], OrderItemUpsertWithWhereUniqueWithoutOrderInput);
