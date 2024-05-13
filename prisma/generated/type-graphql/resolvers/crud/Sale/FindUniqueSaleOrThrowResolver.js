"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSaleOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueSaleOrThrowArgs_1 = require("./args/FindUniqueSaleOrThrowArgs");
const Sale_1 = require("../../../models/Sale");
const helpers_1 = require("../../../helpers");
let FindUniqueSaleOrThrowResolver = class FindUniqueSaleOrThrowResolver {
    async getSale(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueSaleOrThrowResolver = FindUniqueSaleOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Sale_1.Sale, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSaleOrThrowArgs_1.FindUniqueSaleOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSaleOrThrowResolver.prototype, "getSale", null);
exports.FindUniqueSaleOrThrowResolver = FindUniqueSaleOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sale_1.Sale)
], FindUniqueSaleOrThrowResolver);
