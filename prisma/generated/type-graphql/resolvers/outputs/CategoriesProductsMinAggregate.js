"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoriesProductsMinAggregate = class CategoriesProductsMinAggregate {
};
exports.CategoriesProductsMinAggregate = CategoriesProductsMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsMinAggregate.prototype, "categoryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProductsMinAggregate.prototype, "productId", void 0);
exports.CategoriesProductsMinAggregate = CategoriesProductsMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategoriesProductsMinAggregate", {})
], CategoriesProductsMinAggregate);
