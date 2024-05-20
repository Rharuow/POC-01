"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyOrderItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyOrderItemArgs_1 = require("./args/DeleteManyOrderItemArgs");
const OrderItem_1 = require("../../../models/OrderItem");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyOrderItemResolver = class DeleteManyOrderItemResolver {
    async deleteManyOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyOrderItemResolver = DeleteManyOrderItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyOrderItemArgs_1.DeleteManyOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyOrderItemResolver.prototype, "deleteManyOrderItem", null);
exports.DeleteManyOrderItemResolver = DeleteManyOrderItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderItem_1.OrderItem)
], DeleteManyOrderItemResolver);
