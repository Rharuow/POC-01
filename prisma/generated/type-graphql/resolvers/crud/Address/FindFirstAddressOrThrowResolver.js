"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAddressOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstAddressOrThrowArgs_1 = require("./args/FindFirstAddressOrThrowArgs");
const Address_1 = require("../../../models/Address");
const helpers_1 = require("../../../helpers");
let FindFirstAddressOrThrowResolver = class FindFirstAddressOrThrowResolver {
    async findFirstAddressOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstAddressOrThrowResolver = FindFirstAddressOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Address_1.Address, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAddressOrThrowArgs_1.FindFirstAddressOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstAddressOrThrowResolver.prototype, "findFirstAddressOrThrow", null);
exports.FindFirstAddressOrThrowResolver = FindFirstAddressOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], FindFirstAddressOrThrowResolver);
