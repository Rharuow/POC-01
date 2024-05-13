"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductOrderByWithRelationInput_1 = require("../inputs/ProductOrderByWithRelationInput");
const SaleOrderByWithRelationInput_1 = require("../inputs/SaleOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrderOrderByWithRelationInput = class OrderOrderByWithRelationInput {
};
exports.OrderOrderByWithRelationInput = OrderOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], OrderOrderByWithRelationInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithRelationInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithRelationInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithRelationInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithRelationInput.prototype, "saleId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput)
], OrderOrderByWithRelationInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleOrderByWithRelationInput_1.SaleOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleOrderByWithRelationInput_1.SaleOrderByWithRelationInput)
], OrderOrderByWithRelationInput.prototype, "sale", void 0);
exports.OrderOrderByWithRelationInput = OrderOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderOrderByWithRelationInput", {})
], OrderOrderByWithRelationInput);
