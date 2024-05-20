"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateOneRequiredWithoutOrderItemsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateOrConnectWithoutOrderItemsInput_1 = require("../inputs/OrderCreateOrConnectWithoutOrderItemsInput");
const OrderCreateWithoutOrderItemsInput_1 = require("../inputs/OrderCreateWithoutOrderItemsInput");
const OrderUpdateToOneWithWhereWithoutOrderItemsInput_1 = require("../inputs/OrderUpdateToOneWithWhereWithoutOrderItemsInput");
const OrderUpsertWithoutOrderItemsInput_1 = require("../inputs/OrderUpsertWithoutOrderItemsInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateOneRequiredWithoutOrderItemsNestedInput = class OrderUpdateOneRequiredWithoutOrderItemsNestedInput {
};
exports.OrderUpdateOneRequiredWithoutOrderItemsNestedInput = OrderUpdateOneRequiredWithoutOrderItemsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutOrderItemsInput_1.OrderCreateWithoutOrderItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutOrderItemsInput_1.OrderCreateWithoutOrderItemsInput)
], OrderUpdateOneRequiredWithoutOrderItemsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrderItemsInput_1.OrderCreateOrConnectWithoutOrderItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateOrConnectWithoutOrderItemsInput_1.OrderCreateOrConnectWithoutOrderItemsInput)
], OrderUpdateOneRequiredWithoutOrderItemsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpsertWithoutOrderItemsInput_1.OrderUpsertWithoutOrderItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpsertWithoutOrderItemsInput_1.OrderUpsertWithoutOrderItemsInput)
], OrderUpdateOneRequiredWithoutOrderItemsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateOneRequiredWithoutOrderItemsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateToOneWithWhereWithoutOrderItemsInput_1.OrderUpdateToOneWithWhereWithoutOrderItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateToOneWithWhereWithoutOrderItemsInput_1.OrderUpdateToOneWithWhereWithoutOrderItemsInput)
], OrderUpdateOneRequiredWithoutOrderItemsNestedInput.prototype, "update", void 0);
exports.OrderUpdateOneRequiredWithoutOrderItemsNestedInput = OrderUpdateOneRequiredWithoutOrderItemsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateOneRequiredWithoutOrderItemsNestedInput", {})
], OrderUpdateOneRequiredWithoutOrderItemsNestedInput);
