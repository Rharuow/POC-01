"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySaleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManySaleArgs_1 = require("./args/FindManySaleArgs");
const Sale_1 = require("../../../models/Sale");
const helpers_1 = require("../../../helpers");
let FindManySaleResolver = class FindManySaleResolver {
    async sales(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManySaleResolver = FindManySaleResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Sale_1.Sale], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySaleArgs_1.FindManySaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManySaleResolver.prototype, "sales", null);
exports.FindManySaleResolver = FindManySaleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sale_1.Sale)
], FindManySaleResolver);
