"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneOrderItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneOrderItemArgs_1 = require("./args/CreateOneOrderItemArgs");
const OrderItem_1 = require("../../../models/OrderItem");
const helpers_1 = require("../../../helpers");
let CreateOneOrderItemResolver = class CreateOneOrderItemResolver {
    async createOneOrderItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orderItem.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneOrderItemResolver = CreateOneOrderItemResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderItem_1.OrderItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneOrderItemArgs_1.CreateOneOrderItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneOrderItemResolver.prototype, "createOneOrderItem", null);
exports.CreateOneOrderItemResolver = CreateOneOrderItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderItem_1.OrderItem)
], CreateOneOrderItemResolver);
