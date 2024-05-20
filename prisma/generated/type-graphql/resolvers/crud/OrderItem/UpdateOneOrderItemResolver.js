"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneOrderItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneOrderItemArgs_1 = require("./args/UpdateOneOrderItemArgs");
const OrderItem_1 = require("../../../models/OrderItem");
const helpers_1 = require("../../../helpers");
let UpdateOneOrderItemResolver = class UpdateOneOrderItemResolver {
    async updateOneOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneOrderItemResolver = UpdateOneOrderItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderItem_1.OrderItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneOrderItemArgs_1.UpdateOneOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneOrderItemResolver.prototype, "updateOneOrderItem", null);
exports.UpdateOneOrderItemResolver = UpdateOneOrderItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderItem_1.OrderItem)
], UpdateOneOrderItemResolver);
