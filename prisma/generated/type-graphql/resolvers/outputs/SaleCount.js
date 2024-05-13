"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCountOrdersArgs_1 = require("./args/SaleCountOrdersArgs");
let SaleCount = class SaleCount {
    getOrders(root, args) {
        return root.orders;
    }
};
exports.SaleCount = SaleCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "orders",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SaleCount, SaleCountOrdersArgs_1.SaleCountOrdersArgs]),
    tslib_1.__metadata("design:returntype", Number)
], SaleCount.prototype, "getOrders", null);
exports.SaleCount = SaleCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SaleCount", {})
], SaleCount);
