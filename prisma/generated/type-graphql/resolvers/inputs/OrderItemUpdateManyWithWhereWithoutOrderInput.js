"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemUpdateManyWithWhereWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemScalarWhereInput_1 = require("../inputs/OrderItemScalarWhereInput");
const OrderItemUpdateManyMutationInput_1 = require("../inputs/OrderItemUpdateManyMutationInput");
let OrderItemUpdateManyWithWhereWithoutOrderInput = class OrderItemUpdateManyWithWhereWithoutOrderInput {
};
exports.OrderItemUpdateManyWithWhereWithoutOrderInput = OrderItemUpdateManyWithWhereWithoutOrderInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemScalarWhereInput_1.OrderItemScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemScalarWhereInput_1.OrderItemScalarWhereInput)
], OrderItemUpdateManyWithWhereWithoutOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemUpdateManyMutationInput_1.OrderItemUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemUpdateManyMutationInput_1.OrderItemUpdateManyMutationInput)
], OrderItemUpdateManyWithWhereWithoutOrderInput.prototype, "data", void 0);
exports.OrderItemUpdateManyWithWhereWithoutOrderInput = OrderItemUpdateManyWithWhereWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemUpdateManyWithWhereWithoutOrderInput", {})
], OrderItemUpdateManyWithWhereWithoutOrderInput);
