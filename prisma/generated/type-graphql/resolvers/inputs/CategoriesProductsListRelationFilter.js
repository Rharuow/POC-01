"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsWhereInput_1 = require("../inputs/CategoriesProductsWhereInput");
let CategoriesProductsListRelationFilter = class CategoriesProductsListRelationFilter {
};
exports.CategoriesProductsListRelationFilter = CategoriesProductsListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereInput_1.CategoriesProductsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereInput_1.CategoriesProductsWhereInput)
], CategoriesProductsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereInput_1.CategoriesProductsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereInput_1.CategoriesProductsWhereInput)
], CategoriesProductsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereInput_1.CategoriesProductsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereInput_1.CategoriesProductsWhereInput)
], CategoriesProductsListRelationFilter.prototype, "none", void 0);
exports.CategoriesProductsListRelationFilter = CategoriesProductsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsListRelationFilter", {})
], CategoriesProductsListRelationFilter);
