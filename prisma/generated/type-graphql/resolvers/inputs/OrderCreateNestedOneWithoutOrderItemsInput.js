"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedOneWithoutOrderItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateOrConnectWithoutOrderItemsInput_1 = require("../inputs/OrderCreateOrConnectWithoutOrderItemsInput");
const OrderCreateWithoutOrderItemsInput_1 = require("../inputs/OrderCreateWithoutOrderItemsInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedOneWithoutOrderItemsInput = class OrderCreateNestedOneWithoutOrderItemsInput {
};
exports.OrderCreateNestedOneWithoutOrderItemsInput = OrderCreateNestedOneWithoutOrderItemsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutOrderItemsInput_1.OrderCreateWithoutOrderItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutOrderItemsInput_1.OrderCreateWithoutOrderItemsInput)
], OrderCreateNestedOneWithoutOrderItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrderItemsInput_1.OrderCreateOrConnectWithoutOrderItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateOrConnectWithoutOrderItemsInput_1.OrderCreateOrConnectWithoutOrderItemsInput)
], OrderCreateNestedOneWithoutOrderItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateNestedOneWithoutOrderItemsInput.prototype, "connect", void 0);
exports.OrderCreateNestedOneWithoutOrderItemsInput = OrderCreateNestedOneWithoutOrderItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedOneWithoutOrderItemsInput", {})
], OrderCreateNestedOneWithoutOrderItemsInput);
