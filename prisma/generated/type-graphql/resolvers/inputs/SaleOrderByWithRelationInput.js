"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientOrderByWithRelationInput_1 = require("../inputs/ClientOrderByWithRelationInput");
const OrderOrderByRelationAggregateInput_1 = require("../inputs/OrderOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SaleOrderByWithRelationInput = class SaleOrderByWithRelationInput {
};
exports.SaleOrderByWithRelationInput = SaleOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SaleOrderByWithRelationInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleOrderByWithRelationInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleOrderByWithRelationInput.prototype, "clientId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderOrderByRelationAggregateInput_1.OrderOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderOrderByRelationAggregateInput_1.OrderOrderByRelationAggregateInput)
], SaleOrderByWithRelationInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientOrderByWithRelationInput_1.ClientOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientOrderByWithRelationInput_1.ClientOrderByWithRelationInput)
], SaleOrderByWithRelationInput.prototype, "client", void 0);
exports.SaleOrderByWithRelationInput = SaleOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleOrderByWithRelationInput", {})
], SaleOrderByWithRelationInput);
