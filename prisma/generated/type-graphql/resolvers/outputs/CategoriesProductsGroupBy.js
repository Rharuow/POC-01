"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCountAggregate_1 = require("../outputs/CategoriesProductsCountAggregate");
const CategoriesProductsMaxAggregate_1 = require("../outputs/CategoriesProductsMaxAggregate");
const CategoriesProductsMinAggregate_1 = require("../outputs/CategoriesProductsMinAggregate");
let CategoriesProductsGroupBy = class CategoriesProductsGroupBy {
};
exports.CategoriesProductsGroupBy = CategoriesProductsGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsGroupBy.prototype, "categoryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsGroupBy.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCountAggregate_1.CategoriesProductsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCountAggregate_1.CategoriesProductsCountAggregate)
], CategoriesProductsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsMinAggregate_1.CategoriesProductsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsMinAggregate_1.CategoriesProductsMinAggregate)
], CategoriesProductsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsMaxAggregate_1.CategoriesProductsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsMaxAggregate_1.CategoriesProductsMaxAggregate)
], CategoriesProductsGroupBy.prototype, "_max", void 0);
exports.CategoriesProductsGroupBy = CategoriesProductsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategoriesProductsGroupBy", {})
], CategoriesProductsGroupBy);
