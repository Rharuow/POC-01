"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneClientResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneClientArgs_1 = require("./args/UpsertOneClientArgs");
const Client_1 = require("../../../models/Client");
const helpers_1 = require("../../../helpers");
let UpsertOneClientResolver = class UpsertOneClientResolver {
    async upsertOneClient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneClientResolver = UpsertOneClientResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Client_1.Client, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneClientArgs_1.UpsertOneClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneClientResolver.prototype, "upsertOneClient", null);
exports.UpsertOneClientResolver = UpsertOneClientResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Client_1.Client)
], UpsertOneClientResolver);
