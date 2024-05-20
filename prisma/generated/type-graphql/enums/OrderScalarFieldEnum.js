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
    OrderScalarFieldEnum["totalPrice"] = "totalPrice";
    OrderScalarFieldEnum["clientId"] = "clientId";
})(OrderScalarFieldEnum || (exports.OrderScalarFieldEnum = OrderScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(OrderScalarFieldEnum, {
    name: "OrderScalarFieldEnum",
    description: undefined,
});
