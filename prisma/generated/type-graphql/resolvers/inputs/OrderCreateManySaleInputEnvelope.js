"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManySaleInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManySaleInput_1 = require("../inputs/OrderCreateManySaleInput");
let OrderCreateManySaleInputEnvelope = class OrderCreateManySaleInputEnvelope {
};
exports.OrderCreateManySaleInputEnvelope = OrderCreateManySaleInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateManySaleInput_1.OrderCreateManySaleInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateManySaleInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrderCreateManySaleInputEnvelope.prototype, "skipDuplicates", void 0);
exports.OrderCreateManySaleInputEnvelope = OrderCreateManySaleInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManySaleInputEnvelope", {})
], OrderCreateManySaleInputEnvelope);
