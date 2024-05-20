"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemCreateOrConnectWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemCreateWithoutOrderInput_1 = require("../inputs/OrderItemCreateWithoutOrderInput");
const OrderItemWhereUniqueInput_1 = require("../inputs/OrderItemWhereUniqueInput");
let OrderItemCreateOrConnectWithoutOrderInput = class OrderItemCreateOrConnectWithoutOrderInput {
};
exports.OrderItemCreateOrConnectWithoutOrderInput = OrderItemCreateOrConnectWithoutOrderInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput)
], OrderItemCreateOrConnectWithoutOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateWithoutOrderInput_1.OrderItemCreateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemCreateWithoutOrderInput_1.OrderItemCreateWithoutOrderInput)
], OrderItemCreateOrConnectWithoutOrderInput.prototype, "create", void 0);
exports.OrderItemCreateOrConnectWithoutOrderInput = OrderItemCreateOrConnectWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemCreateOrConnectWithoutOrderInput", {})
], OrderItemCreateOrConnectWithoutOrderInput);
