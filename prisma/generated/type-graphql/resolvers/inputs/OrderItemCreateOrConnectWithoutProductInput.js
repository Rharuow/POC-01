"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemCreateOrConnectWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemCreateWithoutProductInput_1 = require("../inputs/OrderItemCreateWithoutProductInput");
const OrderItemWhereUniqueInput_1 = require("../inputs/OrderItemWhereUniqueInput");
let OrderItemCreateOrConnectWithoutProductInput = class OrderItemCreateOrConnectWithoutProductInput {
};
exports.OrderItemCreateOrConnectWithoutProductInput = OrderItemCreateOrConnectWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput)
], OrderItemCreateOrConnectWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateWithoutProductInput_1.OrderItemCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemCreateWithoutProductInput_1.OrderItemCreateWithoutProductInput)
], OrderItemCreateOrConnectWithoutProductInput.prototype, "create", void 0);
exports.OrderItemCreateOrConnectWithoutProductInput = OrderItemCreateOrConnectWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemCreateOrConnectWithoutProductInput", {})
], OrderItemCreateOrConnectWithoutProductInput);
