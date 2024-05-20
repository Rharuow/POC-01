"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithoutOrderItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutOrderItemsInput_1 = require("../inputs/OrderCreateWithoutOrderItemsInput");
const OrderUpdateWithoutOrderItemsInput_1 = require("../inputs/OrderUpdateWithoutOrderItemsInput");
const OrderWhereInput_1 = require("../inputs/OrderWhereInput");
let OrderUpsertWithoutOrderItemsInput = class OrderUpsertWithoutOrderItemsInput {
};
exports.OrderUpsertWithoutOrderItemsInput = OrderUpsertWithoutOrderItemsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutOrderItemsInput_1.OrderUpdateWithoutOrderItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutOrderItemsInput_1.OrderUpdateWithoutOrderItemsInput)
], OrderUpsertWithoutOrderItemsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutOrderItemsInput_1.OrderCreateWithoutOrderItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutOrderItemsInput_1.OrderCreateWithoutOrderItemsInput)
], OrderUpsertWithoutOrderItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereInput_1.OrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereInput_1.OrderWhereInput)
], OrderUpsertWithoutOrderItemsInput.prototype, "where", void 0);
exports.OrderUpsertWithoutOrderItemsInput = OrderUpsertWithoutOrderItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithoutOrderItemsInput", {})
], OrderUpsertWithoutOrderItemsInput);
