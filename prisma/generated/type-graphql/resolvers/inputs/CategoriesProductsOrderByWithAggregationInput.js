"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCountOrderByAggregateInput_1 = require("../inputs/CategoriesProductsCountOrderByAggregateInput");
const CategoriesProductsMaxOrderByAggregateInput_1 = require("../inputs/CategoriesProductsMaxOrderByAggregateInput");
const CategoriesProductsMinOrderByAggregateInput_1 = require("../inputs/CategoriesProductsMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CategoriesProductsOrderByWithAggregationInput = class CategoriesProductsOrderByWithAggregationInput {
};
exports.CategoriesProductsOrderByWithAggregationInput = CategoriesProductsOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsOrderByWithAggregationInput.prototype, "categoryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsOrderByWithAggregationInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCountOrderByAggregateInput_1.CategoriesProductsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCountOrderByAggregateInput_1.CategoriesProductsCountOrderByAggregateInput)
], CategoriesProductsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsMaxOrderByAggregateInput_1.CategoriesProductsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsMaxOrderByAggregateInput_1.CategoriesProductsMaxOrderByAggregateInput)
], CategoriesProductsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsMinOrderByAggregateInput_1.CategoriesProductsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsMinOrderByAggregateInput_1.CategoriesProductsMinOrderByAggregateInput)
], CategoriesProductsOrderByWithAggregationInput.prototype, "_min", void 0);
exports.CategoriesProductsOrderByWithAggregationInput = CategoriesProductsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsOrderByWithAggregationInput", {})
], CategoriesProductsOrderByWithAggregationInput);
