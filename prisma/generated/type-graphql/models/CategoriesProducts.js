"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProducts = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoriesProducts = class CategoriesProducts {
};
exports.CategoriesProducts = CategoriesProducts;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProducts.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProducts.prototype, "categoryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoriesProducts.prototype, "productId", void 0);
exports.CategoriesProducts = CategoriesProducts = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategoriesProducts", {})
], CategoriesProducts);
