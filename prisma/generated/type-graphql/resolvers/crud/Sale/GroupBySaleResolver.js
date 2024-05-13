"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySaleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupBySaleArgs_1 = require("./args/GroupBySaleArgs");
const Sale_1 = require("../../../models/Sale");
const SaleGroupBy_1 = require("../../outputs/SaleGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySaleResolver = class GroupBySaleResolver {
    async groupBySale(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupBySaleResolver = GroupBySaleResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SaleGroupBy_1.SaleGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySaleArgs_1.GroupBySaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySaleResolver.prototype, "groupBySale", null);
exports.GroupBySaleResolver = GroupBySaleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sale_1.Sale)
], GroupBySaleResolver);
