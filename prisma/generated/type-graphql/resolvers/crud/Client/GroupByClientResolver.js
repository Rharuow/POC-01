"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByClientResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByClientArgs_1 = require("./args/GroupByClientArgs");
const Client_1 = require("../../../models/Client");
const ClientGroupBy_1 = require("../../outputs/ClientGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByClientResolver = class GroupByClientResolver {
    async groupByClient(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByClientResolver = GroupByClientResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ClientGroupBy_1.ClientGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByClientArgs_1.GroupByClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByClientResolver.prototype, "groupByClient", null);
exports.GroupByClientResolver = GroupByClientResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Client_1.Client)
], GroupByClientResolver);
