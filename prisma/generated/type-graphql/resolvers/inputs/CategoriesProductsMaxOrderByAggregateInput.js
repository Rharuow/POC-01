"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CategoriesProductsMaxOrderByAggregateInput = class CategoriesProductsMaxOrderByAggregateInput {
};
exports.CategoriesProductsMaxOrderByAggregateInput = CategoriesProductsMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsMaxOrderByAggregateInput.prototype, "categoryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsMaxOrderByAggregateInput.prototype, "productId", void 0);
exports.CategoriesProductsMaxOrderByAggregateInput = CategoriesProductsMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsMaxOrderByAggregateInput", {})
], CategoriesProductsMaxOrderByAggregateInput);
