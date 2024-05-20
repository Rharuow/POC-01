"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOrderItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueOrderItemArgs_1 = require("./args/FindUniqueOrderItemArgs");
const OrderItem_1 = require("../../../models/OrderItem");
const helpers_1 = require("../../../helpers");
let FindUniqueOrderItemResolver = class FindUniqueOrderItemResolver {
    async orderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueOrderItemResolver = FindUniqueOrderItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OrderItem_1.OrderItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOrderItemArgs_1.FindUniqueOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueOrderItemResolver.prototype, "orderItem", null);
exports.FindUniqueOrderItemResolver = FindUniqueOrderItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderItem_1.OrderItem)
], FindUniqueOrderItemResolver);
