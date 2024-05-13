"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateClientResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateClientArgs_1 = require("./args/AggregateClientArgs");
const Client_1 = require("../../../models/Client");
const AggregateClient_1 = require("../../outputs/AggregateClient");
const helpers_1 = require("../../../helpers");
let AggregateClientResolver = class AggregateClientResolver {
    async aggregateClient(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).client.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateClientResolver = AggregateClientResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateClient_1.AggregateClient, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateClientArgs_1.AggregateClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateClientResolver.prototype, "aggregateClient", null);
exports.AggregateClientResolver = AggregateClientResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Client_1.Client)
], AggregateClientResolver);
