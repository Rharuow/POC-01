"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProductScalarFieldEnum;
(function (ProductScalarFieldEnum) {
    ProductScalarFieldEnum["id"] = "id";
    ProductScalarFieldEnum["createdAt"] = "createdAt";
    ProductScalarFieldEnum["deletedAt"] = "deletedAt";
    ProductScalarFieldEnum["updatedAt"] = "updatedAt";
    ProductScalarFieldEnum["name"] = "name";
    ProductScalarFieldEnum["description"] = "description";
    ProductScalarFieldEnum["inventory_quantity"] = "inventory_quantity";
    ProductScalarFieldEnum["price"] = "price";
})(ProductScalarFieldEnum || (exports.ProductScalarFieldEnum = ProductScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
    name: "ProductScalarFieldEnum",
    description: undefined,
});
