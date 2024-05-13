"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Address_1 = require("../../../models/Address");
const Client_1 = require("../../../models/Client");
const Document_1 = require("../../../models/Document");
const helpers_1 = require("../../../helpers");
let ClientRelationsResolver = class ClientRelationsResolver {
    async document(client, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findUniqueOrThrow({
            where: {
                id: client.id,
            },
        }).document({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async address(client, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findUniqueOrThrow({
            where: {
                id: client.id,
            },
        }).address({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.ClientRelationsResolver = ClientRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Document_1.Document, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Client_1.Client, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientRelationsResolver.prototype, "document", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Address_1.Address, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Client_1.Client, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientRelationsResolver.prototype, "address", null);
exports.ClientRelationsResolver = ClientRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Client_1.Client)
], ClientRelationsResolver);
