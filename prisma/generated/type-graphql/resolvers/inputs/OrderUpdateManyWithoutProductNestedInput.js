"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyWithoutProductNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyProductInputEnvelope_1 = require("../inputs/OrderCreateManyProductInputEnvelope");
const OrderCreateOrConnectWithoutProductInput_1 = require("../inputs/OrderCreateOrConnectWithoutProductInput");
const OrderCreateWithoutProductInput_1 = require("../inputs/OrderCreateWithoutProductInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutProductInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutProductInput");
const OrderUpdateWithWhereUniqueWithoutProductInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutProductInput");
const OrderUpsertWithWhereUniqueWithoutProductInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutProductInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutProductNestedInput = class OrderUpdateManyWithoutProductNestedInput {
};
exports.OrderUpdateManyWithoutProductNestedInput = OrderUpdateManyWithoutProductNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutProductInput_1.OrderCreateWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutProductInput_1.OrderCreateOrConnectWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutProductInput_1.OrderUpsertWithWhereUniqueWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyProductInputEnvelope_1.OrderCreateManyProductInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyProductInputEnvelope_1.OrderCreateManyProductInputEnvelope)
], OrderUpdateManyWithoutProductNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutProductInput_1.OrderUpdateWithWhereUniqueWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutProductInput_1.OrderUpdateManyWithWhereWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutProductNestedInput.prototype, "deleteMany", void 0);
exports.OrderUpdateManyWithoutProductNestedInput = OrderUpdateManyWithoutProductNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyWithoutProductNestedInput", {})
], OrderUpdateManyWithoutProductNestedInput);
