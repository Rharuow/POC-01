"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSaleOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstSaleOrThrowArgs_1 = require("./args/FindFirstSaleOrThrowArgs");
const Sale_1 = require("../../../models/Sale");
const helpers_1 = require("../../../helpers");
let FindFirstSaleOrThrowResolver = class FindFirstSaleOrThrowResolver {
    async findFirstSaleOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstSaleOrThrowResolver = FindFirstSaleOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Sale_1.Sale, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSaleOrThrowArgs_1.FindFirstSaleOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSaleOrThrowResolver.prototype, "findFirstSaleOrThrow", null);
exports.FindFirstSaleOrThrowResolver = FindFirstSaleOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sale_1.Sale)
], FindFirstSaleOrThrowResolver);
