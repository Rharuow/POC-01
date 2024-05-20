"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemUpdateManyWithoutProductNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemCreateManyProductInputEnvelope_1 = require("../inputs/OrderItemCreateManyProductInputEnvelope");
const OrderItemCreateOrConnectWithoutProductInput_1 = require("../inputs/OrderItemCreateOrConnectWithoutProductInput");
const OrderItemCreateWithoutProductInput_1 = require("../inputs/OrderItemCreateWithoutProductInput");
const OrderItemScalarWhereInput_1 = require("../inputs/OrderItemScalarWhereInput");
const OrderItemUpdateManyWithWhereWithoutProductInput_1 = require("../inputs/OrderItemUpdateManyWithWhereWithoutProductInput");
const OrderItemUpdateWithWhereUniqueWithoutProductInput_1 = require("../inputs/OrderItemUpdateWithWhereUniqueWithoutProductInput");
const OrderItemUpsertWithWhereUniqueWithoutProductInput_1 = require("../inputs/OrderItemUpsertWithWhereUniqueWithoutProductInput");
const OrderItemWhereUniqueInput_1 = require("../inputs/OrderItemWhereUniqueInput");
let OrderItemUpdateManyWithoutProductNestedInput = class OrderItemUpdateManyWithoutProductNestedInput {
};
exports.OrderItemUpdateManyWithoutProductNestedInput = OrderItemUpdateManyWithoutProductNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateWithoutProductInput_1.OrderItemCreateWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateOrConnectWithoutProductInput_1.OrderItemCreateOrConnectWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemUpsertWithWhereUniqueWithoutProductInput_1.OrderItemUpsertWithWhereUniqueWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateManyProductInputEnvelope_1.OrderItemCreateManyProductInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemCreateManyProductInputEnvelope_1.OrderItemCreateManyProductInputEnvelope)
], OrderItemUpdateManyWithoutProductNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemUpdateWithWhereUniqueWithoutProductInput_1.OrderItemUpdateWithWhereUniqueWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemUpdateManyWithWhereWithoutProductInput_1.OrderItemUpdateManyWithWhereWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemScalarWhereInput_1.OrderItemScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductNestedInput.prototype, "deleteMany", void 0);
exports.OrderItemUpdateManyWithoutProductNestedInput = OrderItemUpdateManyWithoutProductNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemUpdateManyWithoutProductNestedInput", {})
], OrderItemUpdateManyWithoutProductNestedInput);
