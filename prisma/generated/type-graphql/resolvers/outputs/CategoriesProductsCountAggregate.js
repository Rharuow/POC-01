"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoriesProductsCountAggregate = class CategoriesProductsCountAggregate {
};
exports.CategoriesProductsCountAggregate = CategoriesProductsCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CategoriesProductsCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CategoriesProductsCountAggregate.prototype, "categoryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CategoriesProductsCountAggregate.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CategoriesProductsCountAggregate.prototype, "_all", void 0);
exports.CategoriesProductsCountAggregate = CategoriesProductsCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategoriesProductsCountAggregate", {})
], CategoriesProductsCountAggregate);
