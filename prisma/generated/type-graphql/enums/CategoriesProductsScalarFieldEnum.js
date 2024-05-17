"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CategoriesProductsScalarFieldEnum;
(function (CategoriesProductsScalarFieldEnum) {
    CategoriesProductsScalarFieldEnum["id"] = "id";
    CategoriesProductsScalarFieldEnum["categoryName"] = "categoryName";
    CategoriesProductsScalarFieldEnum["productId"] = "productId";
})(CategoriesProductsScalarFieldEnum || (exports.CategoriesProductsScalarFieldEnum = CategoriesProductsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CategoriesProductsScalarFieldEnum, {
    name: "CategoriesProductsScalarFieldEnum",
    description: undefined,
});
