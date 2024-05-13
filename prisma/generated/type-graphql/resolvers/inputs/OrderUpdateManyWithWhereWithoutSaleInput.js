"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyWithWhereWithoutSaleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyMutationInput_1 = require("../inputs/OrderUpdateManyMutationInput");
let OrderUpdateManyWithWhereWithoutSaleInput = class OrderUpdateManyWithWhereWithoutSaleInput {
};
exports.OrderUpdateManyWithWhereWithoutSaleInput = OrderUpdateManyWithWhereWithoutSaleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderScalarWhereInput_1.OrderScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderScalarWhereInput_1.OrderScalarWhereInput)
], OrderUpdateManyWithWhereWithoutSaleInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateManyMutationInput_1.OrderUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateManyMutationInput_1.OrderUpdateManyMutationInput)
], OrderUpdateManyWithWhereWithoutSaleInput.prototype, "data", void 0);
exports.OrderUpdateManyWithWhereWithoutSaleInput = OrderUpdateManyWithWhereWithoutSaleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyWithWhereWithoutSaleInput", {})
], OrderUpdateManyWithWhereWithoutSaleInput);
