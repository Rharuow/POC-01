"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySaleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManySaleArgs_1 = require("./args/CreateManySaleArgs");
const Sale_1 = require("../../../models/Sale");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManySaleResolver = class CreateManySaleResolver {
    async createManySale(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).sale.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManySaleResolver = CreateManySaleResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySaleArgs_1.CreateManySaleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManySaleResolver.prototype, "createManySale", null);
exports.CreateManySaleResolver = CreateManySaleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sale_1.Sale)
], CreateManySaleResolver);
