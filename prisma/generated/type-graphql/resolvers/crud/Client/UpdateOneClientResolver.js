"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneClientResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneClientArgs_1 = require("./args/UpdateOneClientArgs");
const Client_1 = require("../../../models/Client");
const helpers_1 = require("../../../helpers");
let UpdateOneClientResolver = class UpdateOneClientResolver {
    async updateOneClient(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).client.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneClientResolver = UpdateOneClientResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Client_1.Client, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneClientArgs_1.UpdateOneClientArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneClientResolver.prototype, "updateOneClient", null);
exports.UpdateOneClientResolver = UpdateOneClientResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Client_1.Client)
], UpdateOneClientResolver);
