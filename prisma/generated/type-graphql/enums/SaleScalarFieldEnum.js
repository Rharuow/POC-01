"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SaleScalarFieldEnum;
(function (SaleScalarFieldEnum) {
    SaleScalarFieldEnum["id"] = "id";
    SaleScalarFieldEnum["createdAt"] = "createdAt";
    SaleScalarFieldEnum["deletedAt"] = "deletedAt";
    SaleScalarFieldEnum["updatedAt"] = "updatedAt";
    SaleScalarFieldEnum["totalPrice"] = "totalPrice";
    SaleScalarFieldEnum["clientId"] = "clientId";
})(SaleScalarFieldEnum || (exports.SaleScalarFieldEnum = SaleScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SaleScalarFieldEnum, {
    name: "SaleScalarFieldEnum",
    description: undefined,
});
