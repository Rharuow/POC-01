"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Client_1 = require("../../../models/Client");
const Order_1 = require("../../../models/Order");
const Sale_1 = require("../../../models/Sale");
const SaleOrdersArgs_1 = require("./args/SaleOrdersArgs");
const helpers_1 = require("../../../helpers");
let SaleRelationsResolver = class SaleRelationsResolver {
    async orders(sale, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.findUniqueOrThrow({
            where: {
                id: sale.id,
            },
        }).orders({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async client(sale, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.findUniqueOrThrow({
            where: {
                id: sale.id,
            },
        }).client({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.SaleRelationsResolver = SaleRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Order_1.Order], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Sale_1.Sale, Object, Object, SaleOrdersArgs_1.SaleOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleRelationsResolver.prototype, "orders", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Client_1.Client, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Sale_1.Sale, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SaleRelationsResolver.prototype, "client", null);
exports.SaleRelationsResolver = SaleRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sale_1.Sale)
], SaleRelationsResolver);
