"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManyClientInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyClientInput_1 = require("../inputs/OrderCreateManyClientInput");
let OrderCreateManyClientInputEnvelope = class OrderCreateManyClientInputEnvelope {
};
exports.OrderCreateManyClientInputEnvelope = OrderCreateManyClientInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateManyClientInput_1.OrderCreateManyClientInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateManyClientInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrderCreateManyClientInputEnvelope.prototype, "skipDuplicates", void 0);
exports.OrderCreateManyClientInputEnvelope = OrderCreateManyClientInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManyClientInputEnvelope", {})
], OrderCreateManyClientInputEnvelope);
