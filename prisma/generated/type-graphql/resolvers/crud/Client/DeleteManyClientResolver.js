"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyClientResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyClientArgs_1 = require("./args/DeleteManyClientArgs");
const Client_1 = require("../../../models/Client");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyClientResolver = class DeleteManyClientResolver {
    async deleteManyClient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyClientResolver = DeleteManyClientResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyClientArgs_1.DeleteManyClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyClientResolver.prototype, "deleteManyClient", null);
exports.DeleteManyClientResolver = DeleteManyClientResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Client_1.Client)
], DeleteManyClientResolver);
