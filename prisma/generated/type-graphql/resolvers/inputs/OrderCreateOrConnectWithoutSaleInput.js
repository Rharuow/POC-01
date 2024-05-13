"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutSaleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutSaleInput_1 = require("../inputs/OrderCreateWithoutSaleInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutSaleInput = class OrderCreateOrConnectWithoutSaleInput {
};
exports.OrderCreateOrConnectWithoutSaleInput = OrderCreateOrConnectWithoutSaleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutSaleInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutSaleInput_1.OrderCreateWithoutSaleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutSaleInput_1.OrderCreateWithoutSaleInput)
], OrderCreateOrConnectWithoutSaleInput.prototype, "create", void 0);
exports.OrderCreateOrConnectWithoutSaleInput = OrderCreateOrConnectWithoutSaleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutSaleInput", {})
], OrderCreateOrConnectWithoutSaleInput);
