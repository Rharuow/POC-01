"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemCreateNestedManyWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemCreateManyOrderInputEnvelope_1 = require("../inputs/OrderItemCreateManyOrderInputEnvelope");
const OrderItemCreateOrConnectWithoutOrderInput_1 = require("../inputs/OrderItemCreateOrConnectWithoutOrderInput");
const OrderItemCreateWithoutOrderInput_1 = require("../inputs/OrderItemCreateWithoutOrderInput");
const OrderItemWhereUniqueInput_1 = require("../inputs/OrderItemWhereUniqueInput");
let OrderItemCreateNestedManyWithoutOrderInput = class OrderItemCreateNestedManyWithoutOrderInput {
};
exports.OrderItemCreateNestedManyWithoutOrderInput = OrderItemCreateNestedManyWithoutOrderInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateWithoutOrderInput_1.OrderItemCreateWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemCreateNestedManyWithoutOrderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateOrConnectWithoutOrderInput_1.OrderItemCreateOrConnectWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemCreateNestedManyWithoutOrderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateManyOrderInputEnvelope_1.OrderItemCreateManyOrderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemCreateManyOrderInputEnvelope_1.OrderItemCreateManyOrderInputEnvelope)
], OrderItemCreateNestedManyWithoutOrderInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemCreateNestedManyWithoutOrderInput.prototype, "connect", void 0);
exports.OrderItemCreateNestedManyWithoutOrderInput = OrderItemCreateNestedManyWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemCreateNestedManyWithoutOrderInput", {})
], OrderItemCreateNestedManyWithoutOrderInput);
