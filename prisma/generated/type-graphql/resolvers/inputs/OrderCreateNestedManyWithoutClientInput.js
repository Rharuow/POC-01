"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedManyWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyClientInputEnvelope_1 = require("../inputs/OrderCreateManyClientInputEnvelope");
const OrderCreateOrConnectWithoutClientInput_1 = require("../inputs/OrderCreateOrConnectWithoutClientInput");
const OrderCreateWithoutClientInput_1 = require("../inputs/OrderCreateWithoutClientInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedManyWithoutClientInput = class OrderCreateNestedManyWithoutClientInput {
};
exports.OrderCreateNestedManyWithoutClientInput = OrderCreateNestedManyWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutClientInput_1.OrderCreateWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutClientInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutClientInput_1.OrderCreateOrConnectWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutClientInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyClientInputEnvelope_1.OrderCreateManyClientInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyClientInputEnvelope_1.OrderCreateManyClientInputEnvelope)
], OrderCreateNestedManyWithoutClientInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutClientInput.prototype, "connect", void 0);
exports.OrderCreateNestedManyWithoutClientInput = OrderCreateNestedManyWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedManyWithoutClientInput", {})
], OrderCreateNestedManyWithoutClientInput);
