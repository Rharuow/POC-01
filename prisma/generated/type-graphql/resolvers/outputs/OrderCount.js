"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCountOrderItemsArgs_1 = require("./args/OrderCountOrderItemsArgs");
let OrderCount = class OrderCount {
    getOrderItems(root, args) {
        return root.orderItems;
    }
};
exports.OrderCount = OrderCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "orderItems",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OrderCount, OrderCountOrderItemsArgs_1.OrderCountOrderItemsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], OrderCount.prototype, "getOrderItems", null);
exports.OrderCount = OrderCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderCount", {})
], OrderCount);
