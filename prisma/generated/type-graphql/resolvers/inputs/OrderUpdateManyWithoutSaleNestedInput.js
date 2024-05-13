"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyWithoutSaleNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManySaleInputEnvelope_1 = require("../inputs/OrderCreateManySaleInputEnvelope");
const OrderCreateOrConnectWithoutSaleInput_1 = require("../inputs/OrderCreateOrConnectWithoutSaleInput");
const OrderCreateWithoutSaleInput_1 = require("../inputs/OrderCreateWithoutSaleInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutSaleInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutSaleInput");
const OrderUpdateWithWhereUniqueWithoutSaleInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutSaleInput");
const OrderUpsertWithWhereUniqueWithoutSaleInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutSaleInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutSaleNestedInput = class OrderUpdateManyWithoutSaleNestedInput {
};
exports.OrderUpdateManyWithoutSaleNestedInput = OrderUpdateManyWithoutSaleNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutSaleInput_1.OrderCreateWithoutSaleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSaleNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutSaleInput_1.OrderCreateOrConnectWithoutSaleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSaleNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutSaleInput_1.OrderUpsertWithWhereUniqueWithoutSaleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSaleNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManySaleInputEnvelope_1.OrderCreateManySaleInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManySaleInputEnvelope_1.OrderCreateManySaleInputEnvelope)
], OrderUpdateManyWithoutSaleNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSaleNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSaleNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSaleNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSaleNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutSaleInput_1.OrderUpdateWithWhereUniqueWithoutSaleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSaleNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutSaleInput_1.OrderUpdateManyWithWhereWithoutSaleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSaleNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSaleNestedInput.prototype, "deleteMany", void 0);
exports.OrderUpdateManyWithoutSaleNestedInput = OrderUpdateManyWithoutSaleNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyWithoutSaleNestedInput", {})
], OrderUpdateManyWithoutSaleNestedInput);
