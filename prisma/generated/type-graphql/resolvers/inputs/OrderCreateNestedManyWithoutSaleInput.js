"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedManyWithoutSaleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManySaleInputEnvelope_1 = require("../inputs/OrderCreateManySaleInputEnvelope");
const OrderCreateOrConnectWithoutSaleInput_1 = require("../inputs/OrderCreateOrConnectWithoutSaleInput");
const OrderCreateWithoutSaleInput_1 = require("../inputs/OrderCreateWithoutSaleInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedManyWithoutSaleInput = class OrderCreateNestedManyWithoutSaleInput {
};
exports.OrderCreateNestedManyWithoutSaleInput = OrderCreateNestedManyWithoutSaleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutSaleInput_1.OrderCreateWithoutSaleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutSaleInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutSaleInput_1.OrderCreateOrConnectWithoutSaleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutSaleInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManySaleInputEnvelope_1.OrderCreateManySaleInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManySaleInputEnvelope_1.OrderCreateManySaleInputEnvelope)
], OrderCreateNestedManyWithoutSaleInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutSaleInput.prototype, "connect", void 0);
exports.OrderCreateNestedManyWithoutSaleInput = OrderCreateNestedManyWithoutSaleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedManyWithoutSaleInput", {})
], OrderCreateNestedManyWithoutSaleInput);
