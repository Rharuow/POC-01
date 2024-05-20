"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutOrderItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutOrderItemsInput_1 = require("../inputs/OrderCreateWithoutOrderItemsInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutOrderItemsInput = class OrderCreateOrConnectWithoutOrderItemsInput {
};
exports.OrderCreateOrConnectWithoutOrderItemsInput = OrderCreateOrConnectWithoutOrderItemsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutOrderItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutOrderItemsInput_1.OrderCreateWithoutOrderItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutOrderItemsInput_1.OrderCreateWithoutOrderItemsInput)
], OrderCreateOrConnectWithoutOrderItemsInput.prototype, "create", void 0);
exports.OrderCreateOrConnectWithoutOrderItemsInput = OrderCreateOrConnectWithoutOrderItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutOrderItemsInput", {})
], OrderCreateOrConnectWithoutOrderItemsInput);
