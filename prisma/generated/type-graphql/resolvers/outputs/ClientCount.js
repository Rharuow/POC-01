"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCountOrdersArgs_1 = require("./args/ClientCountOrdersArgs");
let ClientCount = class ClientCount {
    getOrders(root, args) {
        return root.Orders;
    }
};
exports.ClientCount = ClientCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "Orders",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ClientCount, ClientCountOrdersArgs_1.ClientCountOrdersArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ClientCount.prototype, "getOrders", null);
exports.ClientCount = ClientCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ClientCount", {})
], ClientCount);
