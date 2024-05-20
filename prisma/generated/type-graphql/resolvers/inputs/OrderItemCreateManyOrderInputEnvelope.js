"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemCreateManyOrderInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemCreateManyOrderInput_1 = require("../inputs/OrderItemCreateManyOrderInput");
let OrderItemCreateManyOrderInputEnvelope = class OrderItemCreateManyOrderInputEnvelope {
};
exports.OrderItemCreateManyOrderInputEnvelope = OrderItemCreateManyOrderInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateManyOrderInput_1.OrderItemCreateManyOrderInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemCreateManyOrderInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrderItemCreateManyOrderInputEnvelope.prototype, "skipDuplicates", void 0);
exports.OrderItemCreateManyOrderInputEnvelope = OrderItemCreateManyOrderInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemCreateManyOrderInputEnvelope", {})
], OrderItemCreateManyOrderInputEnvelope);
