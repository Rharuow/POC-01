"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSaleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneSaleArgs_1 = require("./args/CreateOneSaleArgs");
const Sale_1 = require("../../../models/Sale");
const helpers_1 = require("../../../helpers");
let CreateOneSaleResolver = class CreateOneSaleResolver {
    async createOneSale(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneSaleResolver = CreateOneSaleResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sale_1.Sale, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSaleArgs_1.CreateOneSaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneSaleResolver.prototype, "createOneSale", null);
exports.CreateOneSaleResolver = CreateOneSaleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sale_1.Sale)
], CreateOneSaleResolver);
