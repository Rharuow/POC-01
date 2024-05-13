"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueOrderArgs_1 = require("./args/FindUniqueOrderArgs");
const Order_1 = require("../../../models/Order");
const helpers_1 = require("../../../helpers");
let FindUniqueOrderResolver = class FindUniqueOrderResolver {
    async order(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueOrderResolver = FindUniqueOrderResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Order_1.Order, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOrderArgs_1.FindUniqueOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueOrderResolver.prototype, "order", null);
exports.FindUniqueOrderResolver = FindUniqueOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], FindUniqueOrderResolver);
