"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleAvgOrderByAggregateInput_1 = require("../inputs/SaleAvgOrderByAggregateInput");
const SaleCountOrderByAggregateInput_1 = require("../inputs/SaleCountOrderByAggregateInput");
const SaleMaxOrderByAggregateInput_1 = require("../inputs/SaleMaxOrderByAggregateInput");
const SaleMinOrderByAggregateInput_1 = require("../inputs/SaleMinOrderByAggregateInput");
const SaleSumOrderByAggregateInput_1 = require("../inputs/SaleSumOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SaleOrderByWithAggregationInput = class SaleOrderByWithAggregationInput {
};
exports.SaleOrderByWithAggregationInput = SaleOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SaleOrderByWithAggregationInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleOrderByWithAggregationInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleOrderByWithAggregationInput.prototype, "clientId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCountOrderByAggregateInput_1.SaleCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleCountOrderByAggregateInput_1.SaleCountOrderByAggregateInput)
], SaleOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleAvgOrderByAggregateInput_1.SaleAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleAvgOrderByAggregateInput_1.SaleAvgOrderByAggregateInput)
], SaleOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleMaxOrderByAggregateInput_1.SaleMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleMaxOrderByAggregateInput_1.SaleMaxOrderByAggregateInput)
], SaleOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleMinOrderByAggregateInput_1.SaleMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleMinOrderByAggregateInput_1.SaleMinOrderByAggregateInput)
], SaleOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleSumOrderByAggregateInput_1.SaleSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleSumOrderByAggregateInput_1.SaleSumOrderByAggregateInput)
], SaleOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.SaleOrderByWithAggregationInput = SaleOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleOrderByWithAggregationInput", {})
], SaleOrderByWithAggregationInput);
