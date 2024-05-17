"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCategoriesProducts = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCountAggregate_1 = require("../outputs/CategoriesProductsCountAggregate");
const CategoriesProductsMaxAggregate_1 = require("../outputs/CategoriesProductsMaxAggregate");
const CategoriesProductsMinAggregate_1 = require("../outputs/CategoriesProductsMinAggregate");
let AggregateCategoriesProducts = class AggregateCategoriesProducts {
};
exports.AggregateCategoriesProducts = AggregateCategoriesProducts;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCountAggregate_1.CategoriesProductsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCountAggregate_1.CategoriesProductsCountAggregate)
], AggregateCategoriesProducts.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsMinAggregate_1.CategoriesProductsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsMinAggregate_1.CategoriesProductsMinAggregate)
], AggregateCategoriesProducts.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsMaxAggregate_1.CategoriesProductsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsMaxAggregate_1.CategoriesProductsMaxAggregate)
], AggregateCategoriesProducts.prototype, "_max", void 0);
exports.AggregateCategoriesProducts = AggregateCategoriesProducts = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCategoriesProducts", {})
], AggregateCategoriesProducts);
