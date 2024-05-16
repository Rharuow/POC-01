"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Address_1 = require("../../../models/Address");
const Client_1 = require("../../../models/Client");
const helpers_1 = require("../../../helpers");
let AddressRelationsResolver = class AddressRelationsResolver {
    async client(address, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findUniqueOrThrow({
            where: {
                id: address.id,
            },
        }).client({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.AddressRelationsResolver = AddressRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Client_1.Client, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Address_1.Address, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressRelationsResolver.prototype, "client", null);
exports.AddressRelationsResolver = AddressRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], AddressRelationsResolver);
