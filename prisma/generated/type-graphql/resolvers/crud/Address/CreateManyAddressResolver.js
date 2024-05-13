"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAddressResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAddressArgs_1 = require("./args/CreateManyAddressArgs");
const Address_1 = require("../../../models/Address");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyAddressResolver = class CreateManyAddressResolver {
    async createManyAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).address.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAddressResolver = CreateManyAddressResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAddressArgs_1.CreateManyAddressArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAddressResolver.prototype, "createManyAddress", null);
exports.CreateManyAddressResolver = CreateManyAddressResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], CreateManyAddressResolver);
