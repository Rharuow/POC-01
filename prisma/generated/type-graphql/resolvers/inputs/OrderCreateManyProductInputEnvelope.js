"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManyProductInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyProductInput_1 = require("../inputs/OrderCreateManyProductInput");
let OrderCreateManyProductInputEnvelope = class OrderCreateManyProductInputEnvelope {
};
exports.OrderCreateManyProductInputEnvelope = OrderCreateManyProductInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateManyProductInput_1.OrderCreateManyProductInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateManyProductInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrderCreateManyProductInputEnvelope.prototype, "skipDuplicates", void 0);
exports.OrderCreateManyProductInputEnvelope = OrderCreateManyProductInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManyProductInputEnvelope", {})
], OrderCreateManyProductInputEnvelope);
