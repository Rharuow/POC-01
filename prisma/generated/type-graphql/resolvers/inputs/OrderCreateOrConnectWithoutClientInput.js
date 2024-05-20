"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutClientInput_1 = require("../inputs/OrderCreateWithoutClientInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutClientInput = class OrderCreateOrConnectWithoutClientInput {
};
exports.OrderCreateOrConnectWithoutClientInput = OrderCreateOrConnectWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutClientInput_1.OrderCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutClientInput_1.OrderCreateWithoutClientInput)
], OrderCreateOrConnectWithoutClientInput.prototype, "create", void 0);
exports.OrderCreateOrConnectWithoutClientInput = OrderCreateOrConnectWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutClientInput", {})
], OrderCreateOrConnectWithoutClientInput);
