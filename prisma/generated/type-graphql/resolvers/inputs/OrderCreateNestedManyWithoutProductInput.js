"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedManyWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyProductInputEnvelope_1 = require("../inputs/OrderCreateManyProductInputEnvelope");
const OrderCreateOrConnectWithoutProductInput_1 = require("../inputs/OrderCreateOrConnectWithoutProductInput");
const OrderCreateWithoutProductInput_1 = require("../inputs/OrderCreateWithoutProductInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedManyWithoutProductInput = class OrderCreateNestedManyWithoutProductInput {
};
exports.OrderCreateNestedManyWithoutProductInput = OrderCreateNestedManyWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutProductInput_1.OrderCreateWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutProductInput_1.OrderCreateOrConnectWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutProductInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyProductInputEnvelope_1.OrderCreateManyProductInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyProductInputEnvelope_1.OrderCreateManyProductInputEnvelope)
], OrderCreateNestedManyWithoutProductInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutProductInput.prototype, "connect", void 0);
exports.OrderCreateNestedManyWithoutProductInput = OrderCreateNestedManyWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedManyWithoutProductInput", {})
], OrderCreateNestedManyWithoutProductInput);
