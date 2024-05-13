"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueClientOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueClientOrThrowArgs_1 = require("./args/FindUniqueClientOrThrowArgs");
const Client_1 = require("../../../models/Client");
const helpers_1 = require("../../../helpers");
let FindUniqueClientOrThrowResolver = class FindUniqueClientOrThrowResolver {
    async getClient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueClientOrThrowResolver = FindUniqueClientOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Client_1.Client, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueClientOrThrowArgs_1.FindUniqueClientOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueClientOrThrowResolver.prototype, "getClient", null);
exports.FindUniqueClientOrThrowResolver = FindUniqueClientOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Client_1.Client)
], FindUniqueClientOrThrowResolver);
