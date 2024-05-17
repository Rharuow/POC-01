"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoriesProductsMaxAggregate = class CategoriesProductsMaxAggregate {
};
exports.CategoriesProductsMaxAggregate = CategoriesProductsMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsMaxAggregate.prototype, "categoryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsMaxAggregate.prototype, "productId", void 0);
exports.CategoriesProductsMaxAggregate = CategoriesProductsMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategoriesProductsMaxAggregate", {})
], CategoriesProductsMaxAggregate);
