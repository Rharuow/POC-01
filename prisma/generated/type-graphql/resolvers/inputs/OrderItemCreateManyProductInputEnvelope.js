"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemCreateManyProductInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemCreateManyProductInput_1 = require("../inputs/OrderItemCreateManyProductInput");
let OrderItemCreateManyProductInputEnvelope = class OrderItemCreateManyProductInputEnvelope {
};
exports.OrderItemCreateManyProductInputEnvelope = OrderItemCreateManyProductInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateManyProductInput_1.OrderItemCreateManyProductInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemCreateManyProductInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrderItemCreateManyProductInputEnvelope.prototype, "skipDuplicates", void 0);
exports.OrderItemCreateManyProductInputEnvelope = OrderItemCreateManyProductInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemCreateManyProductInputEnvelope", {})
], OrderItemCreateManyProductInputEnvelope);
