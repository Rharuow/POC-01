"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAddressResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAddressArgs_1 = require("./args/AggregateAddressArgs");
const Address_1 = require("../../../models/Address");
const AggregateAddress_1 = require("../../outputs/AggregateAddress");
const helpers_1 = require("../../../helpers");
let AggregateAddressResolver = class AggregateAddressResolver {
    async aggregateAddress(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).address.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateAddressResolver = AggregateAddressResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAddress_1.AggregateAddress, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAddressArgs_1.AggregateAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAddressResolver.prototype, "aggregateAddress", null);
exports.AggregateAddressResolver = AggregateAddressResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], AggregateAddressResolver);
