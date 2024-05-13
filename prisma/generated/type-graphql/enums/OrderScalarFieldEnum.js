"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OrderScalarFieldEnum;
(function (OrderScalarFieldEnum) {
    OrderScalarFieldEnum["id"] = "id";
    OrderScalarFieldEnum["createdAt"] = "createdAt";
    OrderScalarFieldEnum["deletedAt"] = "deletedAt";
    OrderScalarFieldEnum["updatedAt"] = "updatedAt";
    OrderScalarFieldEnum["amount"] = "amount";
    OrderScalarFieldEnum["totalPrice"] = "totalPrice";
    OrderScalarFieldEnum["productId"] = "productId";
    OrderScalarFieldEnum["saleId"] = "saleId";
})(OrderScalarFieldEnum || (exports.OrderScalarFieldEnum = OrderScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(OrderScalarFieldEnum, {
    name: "OrderScalarFieldEnum",
    description: undefined,
});
