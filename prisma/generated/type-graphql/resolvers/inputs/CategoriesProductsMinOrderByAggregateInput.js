"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CategoriesProductsMinOrderByAggregateInput = class CategoriesProductsMinOrderByAggregateInput {
};
exports.CategoriesProductsMinOrderByAggregateInput = CategoriesProductsMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsMinOrderByAggregateInput.prototype, "categoryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsMinOrderByAggregateInput.prototype, "productId", void 0);
exports.CategoriesProductsMinOrderByAggregateInput = CategoriesProductsMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsMinOrderByAggregateInput", {})
], CategoriesProductsMinOrderByAggregateInput);
