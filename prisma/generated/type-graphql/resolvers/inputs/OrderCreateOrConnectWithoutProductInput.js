"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutProductInput_1 = require("../inputs/OrderCreateWithoutProductInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutProductInput = class OrderCreateOrConnectWithoutProductInput {
};
exports.OrderCreateOrConnectWithoutProductInput = OrderCreateOrConnectWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutProductInput_1.OrderCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutProductInput_1.OrderCreateWithoutProductInput)
], OrderCreateOrConnectWithoutProductInput.prototype, "create", void 0);
exports.OrderCreateOrConnectWithoutProductInput = OrderCreateOrConnectWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutProductInput", {})
], OrderCreateOrConnectWithoutProductInput);
