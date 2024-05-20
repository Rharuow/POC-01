"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyOrderItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyOrderItemArgs_1 = require("./args/UpdateManyOrderItemArgs");
const OrderItem_1 = require("../../../models/OrderItem");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyOrderItemResolver = class UpdateManyOrderItemResolver {
    async updateManyOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyOrderItemResolver = UpdateManyOrderItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyOrderItemArgs_1.UpdateManyOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyOrderItemResolver.prototype, "updateManyOrderItem", null);
exports.UpdateManyOrderItemResolver = UpdateManyOrderItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderItem_1.OrderItem)
], UpdateManyOrderItemResolver);
