"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCountOrderByAggregateInput_1 = require("../inputs/AddressCountOrderByAggregateInput");
const AddressMaxOrderByAggregateInput_1 = require("../inputs/AddressMaxOrderByAggregateInput");
const AddressMinOrderByAggregateInput_1 = require("../inputs/AddressMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AddressOrderByWithAggregationInput = class AddressOrderByWithAggregationInput {
};
exports.AddressOrderByWithAggregationInput = AddressOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], AddressOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], AddressOrderByWithAggregationInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], AddressOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], AddressOrderByWithAggregationInput.prototype, "billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], AddressOrderByWithAggregationInput.prototype, "delivery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressOrderByWithAggregationInput.prototype, "clientId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCountOrderByAggregateInput_1.AddressCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCountOrderByAggregateInput_1.AddressCountOrderByAggregateInput)
], AddressOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressMaxOrderByAggregateInput_1.AddressMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressMaxOrderByAggregateInput_1.AddressMaxOrderByAggregateInput)
], AddressOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressMinOrderByAggregateInput_1.AddressMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressMinOrderByAggregateInput_1.AddressMinOrderByAggregateInput)
], AddressOrderByWithAggregationInput.prototype, "_min", void 0);
exports.AddressOrderByWithAggregationInput = AddressOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressOrderByWithAggregationInput", {})
], AddressOrderByWithAggregationInput);
