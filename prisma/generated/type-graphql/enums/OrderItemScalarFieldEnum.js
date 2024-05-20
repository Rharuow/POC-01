"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OrderItemScalarFieldEnum;
(function (OrderItemScalarFieldEnum) {
    OrderItemScalarFieldEnum["id"] = "id";
    OrderItemScalarFieldEnum["createdAt"] = "createdAt";
    OrderItemScalarFieldEnum["deletedAt"] = "deletedAt";
    OrderItemScalarFieldEnum["updatedAt"] = "updatedAt";
    OrderItemScalarFieldEnum["amount"] = "amount";
    OrderItemScalarFieldEnum["totalPrice"] = "totalPrice";
    OrderItemScalarFieldEnum["productId"] = "productId";
    OrderItemScalarFieldEnum["orderId"] = "orderId";
})(OrderItemScalarFieldEnum || (exports.OrderItemScalarFieldEnum = OrderItemScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(OrderItemScalarFieldEnum, {
    name: "OrderItemScalarFieldEnum",
    description: undefined,
});
