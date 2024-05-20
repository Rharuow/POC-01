"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressOrderByWithRelationInput_1 = require("../inputs/AddressOrderByWithRelationInput");
const DocumentOrderByWithRelationInput_1 = require("../inputs/DocumentOrderByWithRelationInput");
const OrderOrderByRelationAggregateInput_1 = require("../inputs/OrderOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ClientOrderByWithRelationInput = class ClientOrderByWithRelationInput {
};
exports.ClientOrderByWithRelationInput = ClientOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ClientOrderByWithRelationInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ClientOrderByWithRelationInput.prototype, "documentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ClientOrderByWithRelationInput.prototype, "addressId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentOrderByWithRelationInput_1.DocumentOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentOrderByWithRelationInput_1.DocumentOrderByWithRelationInput)
], ClientOrderByWithRelationInput.prototype, "document", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressOrderByWithRelationInput_1.AddressOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressOrderByWithRelationInput_1.AddressOrderByWithRelationInput)
], ClientOrderByWithRelationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderOrderByRelationAggregateInput_1.OrderOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderOrderByRelationAggregateInput_1.OrderOrderByRelationAggregateInput)
], ClientOrderByWithRelationInput.prototype, "Orders", void 0);
exports.ClientOrderByWithRelationInput = ClientOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientOrderByWithRelationInput", {})
], ClientOrderByWithRelationInput);
