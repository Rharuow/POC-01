"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsWhereInput_1 = require("../inputs/CategoriesProductsWhereInput");
const CategoryRelationFilter_1 = require("../inputs/CategoryRelationFilter");
const ProductRelationFilter_1 = require("../inputs/ProductRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let CategoriesProductsWhereUniqueInput = class CategoriesProductsWhereUniqueInput {
};
exports.CategoriesProductsWhereUniqueInput = CategoriesProductsWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereInput_1.CategoriesProductsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereInput_1.CategoriesProductsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereInput_1.CategoriesProductsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoriesProductsWhereUniqueInput.prototype, "categoryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoriesProductsWhereUniqueInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryRelationFilter_1.CategoryRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryRelationFilter_1.CategoryRelationFilter)
], CategoriesProductsWhereUniqueInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductRelationFilter_1.ProductRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductRelationFilter_1.ProductRelationFilter)
], CategoriesProductsWhereUniqueInput.prototype, "product", void 0);
exports.CategoriesProductsWhereUniqueInput = CategoriesProductsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsWhereUniqueInput", {})
], CategoriesProductsWhereUniqueInput);
