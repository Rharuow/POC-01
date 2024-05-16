"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Client_1 = require("../../../models/Client");
const Document_1 = require("../../../models/Document");
const helpers_1 = require("../../../helpers");
let DocumentRelationsResolver = class DocumentRelationsResolver {
    async client(document, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).document.findUniqueOrThrow({
            where: {
                id: document.id,
            },
        }).client({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DocumentRelationsResolver = DocumentRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Client_1.Client, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Document_1.Document, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentRelationsResolver.prototype, "client", null);
exports.DocumentRelationsResolver = DocumentRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Document_1.Document)
], DocumentRelationsResolver);
