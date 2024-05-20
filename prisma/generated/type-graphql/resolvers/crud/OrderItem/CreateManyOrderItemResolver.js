"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyOrderItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyOrderItemArgs_1 = require("./args/CreateManyOrderItemArgs");
const OrderItem_1 = require("../../../models/OrderItem");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyOrderItemResolver = class CreateManyOrderItemResolver {
    async createManyOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyOrderItemResolver = CreateManyOrderItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyOrderItemArgs_1.CreateManyOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyOrderItemResolver.prototype, "createManyOrderItem", null);
exports.CreateManyOrderItemResolver = CreateManyOrderItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderItem_1.OrderItem)
], CreateManyOrderItemResolver);
