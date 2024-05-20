"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Address_1 = require("../../../models/Address");
const Client_1 = require("../../../models/Client");
const Document_1 = require("../../../models/Document");
const Order_1 = require("../../../models/Order");
const ClientAddressArgs_1 = require("./args/ClientAddressArgs");
const ClientDocumentArgs_1 = require("./args/ClientDocumentArgs");
const ClientOrdersArgs_1 = require("./args/ClientOrdersArgs");
const helpers_1 = require("../../../helpers");
let ClientRelationsResolver = class ClientRelationsResolver {
    async document(client, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findUniqueOrThrow({
            where: {
                id: client.id,
            },
        }).document({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async address(client, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findUniqueOrThrow({
            where: {
                id: client.id,
            },
        }).address({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async Orders(client, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.findUniqueOrThrow({
            where: {
                id: client.id,
            },
        }).Orders({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.ClientRelationsResolver = ClientRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Document_1.Document, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Client_1.Client, Object, Object, ClientDocumentArgs_1.ClientDocumentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientRelationsResolver.prototype, "document", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Address_1.Address, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Client_1.Client, Object, Object, ClientAddressArgs_1.ClientAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientRelationsResolver.prototype, "address", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Order_1.Order], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Client_1.Client, Object, Object, ClientOrdersArgs_1.ClientOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientRelationsResolver.prototype, "Orders", null);
exports.ClientRelationsResolver = ClientRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Client_1.Client)
], ClientRelationsResolver);
