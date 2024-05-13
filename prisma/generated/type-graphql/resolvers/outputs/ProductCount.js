"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCountCategoriesArgs_1 = require("./args/ProductCountCategoriesArgs");
const ProductCountOrdersArgs_1 = require("./args/ProductCountOrdersArgs");
let ProductCount = class ProductCount {
    getCategories(root, args) {
        return root.categories;
    }
    getOrders(root, args) {
        return root.orders;
    }
};
exports.ProductCount = ProductCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "categories",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ProductCount, ProductCountCategoriesArgs_1.ProductCountCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ProductCount.prototype, "getCategories", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "orders",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ProductCount, ProductCountOrdersArgs_1.ProductCountOrdersArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ProductCount.prototype, "getOrders", null);
exports.ProductCount = ProductCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProductCount", {})
], ProductCount);
