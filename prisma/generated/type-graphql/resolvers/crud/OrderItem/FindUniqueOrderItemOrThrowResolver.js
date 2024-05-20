"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOrderItemOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueOrderItemOrThrowArgs_1 = require("./args/FindUniqueOrderItemOrThrowArgs");
const OrderItem_1 = require("../../../models/OrderItem");
const helpers_1 = require("../../../helpers");
let FindUniqueOrderItemOrThrowResolver = class FindUniqueOrderItemOrThrowResolver {
    async getOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueOrderItemOrThrowResolver = FindUniqueOrderItemOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OrderItem_1.OrderItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOrderItemOrThrowArgs_1.FindUniqueOrderItemOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueOrderItemOrThrowResolver.prototype, "getOrderItem", null);
exports.FindUniqueOrderItemOrThrowResolver = FindUniqueOrderItemOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderItem_1.OrderItem)
], FindUniqueOrderItemOrThrowResolver);
