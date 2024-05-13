"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSaleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSaleArgs_1 = require("./args/AggregateSaleArgs");
const Sale_1 = require("../../../models/Sale");
const AggregateSale_1 = require("../../outputs/AggregateSale");
const helpers_1 = require("../../../helpers");
let AggregateSaleResolver = class AggregateSaleResolver {
    async aggregateSale(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateSaleResolver = AggregateSaleResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSale_1.AggregateSale, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSaleArgs_1.AggregateSaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSaleResolver.prototype, "aggregateSale", null);
exports.AggregateSaleResolver = AggregateSaleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sale_1.Sale)
], AggregateSaleResolver);
