"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAddressOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueAddressOrThrowArgs_1 = require("./args/FindUniqueAddressOrThrowArgs");
const Address_1 = require("../../../models/Address");
const helpers_1 = require("../../../helpers");
let FindUniqueAddressOrThrowResolver = class FindUniqueAddressOrThrowResolver {
    async getAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueAddressOrThrowResolver = FindUniqueAddressOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Address_1.Address, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAddressOrThrowArgs_1.FindUniqueAddressOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueAddressOrThrowResolver.prototype, "getAddress", null);
exports.FindUniqueAddressOrThrowResolver = FindUniqueAddressOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], FindUniqueAddressOrThrowResolver);
