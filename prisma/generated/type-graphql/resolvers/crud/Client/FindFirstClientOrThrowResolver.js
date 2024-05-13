"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstClientOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstClientOrThrowArgs_1 = require("./args/FindFirstClientOrThrowArgs");
const Client_1 = require("../../../models/Client");
const helpers_1 = require("../../../helpers");
let FindFirstClientOrThrowResolver = class FindFirstClientOrThrowResolver {
    async findFirstClientOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstClientOrThrowResolver = FindFirstClientOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Client_1.Client, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstClientOrThrowArgs_1.FindFirstClientOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstClientOrThrowResolver.prototype, "findFirstClientOrThrow", null);
exports.FindFirstClientOrThrowResolver = FindFirstClientOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Client_1.Client)
], FindFirstClientOrThrowResolver);
