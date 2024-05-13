"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneOrderArgs_1 = require("./args/CreateOneOrderArgs");
const Order_1 = require("../../../models/Order");
const helpers_1 = require("../../../helpers");
let CreateOneOrderResolver = class CreateOneOrderResolver {
    async createOneOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).order.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneOrderResolver = CreateOneOrderResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Order_1.Order, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneOrderArgs_1.CreateOneOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneOrderResolver.prototype, "createOneOrder", null);
exports.CreateOneOrderResolver = CreateOneOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], CreateOneOrderResolver);
