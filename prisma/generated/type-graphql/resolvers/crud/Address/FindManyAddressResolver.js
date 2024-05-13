"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAddressResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyAddressArgs_1 = require("./args/FindManyAddressArgs");
const Address_1 = require("../../../models/Address");
const helpers_1 = require("../../../helpers");
let FindManyAddressResolver = class FindManyAddressResolver {
    async addresses(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyAddressResolver = FindManyAddressResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Address_1.Address], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAddressArgs_1.FindManyAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyAddressResolver.prototype, "addresses", null);
exports.FindManyAddressResolver = FindManyAddressResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], FindManyAddressResolver);
