"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsOrderByRelationAggregateInput_1 = require("../inputs/CategoriesProductsOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CategoryOrderByWithRelationInput = class CategoryOrderByWithRelationInput {
};
exports.CategoryOrderByWithRelationInput = CategoryOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CategoryOrderByWithRelationInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsOrderByRelationAggregateInput_1.CategoriesProductsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsOrderByRelationAggregateInput_1.CategoriesProductsOrderByRelationAggregateInput)
], CategoryOrderByWithRelationInput.prototype, "produtos", void 0);
exports.CategoryOrderByWithRelationInput = CategoryOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryOrderByWithRelationInput", {})
], CategoryOrderByWithRelationInput);
