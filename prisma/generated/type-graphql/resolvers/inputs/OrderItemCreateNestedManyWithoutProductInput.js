"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemCreateNestedManyWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemCreateManyProductInputEnvelope_1 = require("../inputs/OrderItemCreateManyProductInputEnvelope");
const OrderItemCreateOrConnectWithoutProductInput_1 = require("../inputs/OrderItemCreateOrConnectWithoutProductInput");
const OrderItemCreateWithoutProductInput_1 = require("../inputs/OrderItemCreateWithoutProductInput");
const OrderItemWhereUniqueInput_1 = require("../inputs/OrderItemWhereUniqueInput");
let OrderItemCreateNestedManyWithoutProductInput = class OrderItemCreateNestedManyWithoutProductInput {
};
exports.OrderItemCreateNestedManyWithoutProductInput = OrderItemCreateNestedManyWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateWithoutProductInput_1.OrderItemCreateWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemCreateNestedManyWithoutProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateOrConnectWithoutProductInput_1.OrderItemCreateOrConnectWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemCreateNestedManyWithoutProductInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateManyProductInputEnvelope_1.OrderItemCreateManyProductInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemCreateManyProductInputEnvelope_1.OrderItemCreateManyProductInputEnvelope)
], OrderItemCreateNestedManyWithoutProductInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemCreateNestedManyWithoutProductInput.prototype, "connect", void 0);
exports.OrderItemCreateNestedManyWithoutProductInput = OrderItemCreateNestedManyWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemCreateNestedManyWithoutProductInput", {})
], OrderItemCreateNestedManyWithoutProductInput);
