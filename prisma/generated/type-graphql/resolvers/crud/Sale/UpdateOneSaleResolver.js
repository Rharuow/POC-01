"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSaleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneSaleArgs_1 = require("./args/UpdateOneSaleArgs");
const Sale_1 = require("../../../models/Sale");
const helpers_1 = require("../../../helpers");
let UpdateOneSaleResolver = class UpdateOneSaleResolver {
    async updateOneSale(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneSaleResolver = UpdateOneSaleResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sale_1.Sale, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSaleArgs_1.UpdateOneSaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneSaleResolver.prototype, "updateOneSale", null);
exports.UpdateOneSaleResolver = UpdateOneSaleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sale_1.Sale)
], UpdateOneSaleResolver);
