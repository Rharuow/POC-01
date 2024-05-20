"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneOrderItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneOrderItemArgs_1 = require("./args/UpsertOneOrderItemArgs");
const OrderItem_1 = require("../../../models/OrderItem");
const helpers_1 = require("../../../helpers");
let UpsertOneOrderItemResolver = class UpsertOneOrderItemResolver {
    async upsertOneOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneOrderItemResolver = UpsertOneOrderItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderItem_1.OrderItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneOrderItemArgs_1.UpsertOneOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneOrderItemResolver.prototype, "upsertOneOrderItem", null);
exports.UpsertOneOrderItemResolver = UpsertOneOrderItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderItem_1.OrderItem)
], UpsertOneOrderItemResolver);
