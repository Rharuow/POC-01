"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OrderOrderByRelationAggregateInput = class OrderOrderByRelationAggregateInput {
};
exports.OrderOrderByRelationAggregateInput = OrderOrderByRelationAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.OrderOrderByRelationAggregateInput = OrderOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderOrderByRelationAggregateInput", {})
], OrderOrderByRelationAggregateInput);
