"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSaleOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleOrderByWithRelationInput_1 = require("../../../inputs/SaleOrderByWithRelationInput");
const SaleWhereInput_1 = require("../../../inputs/SaleWhereInput");
const SaleWhereUniqueInput_1 = require("../../../inputs/SaleWhereUniqueInput");
const SaleScalarFieldEnum_1 = require("../../../../enums/SaleScalarFieldEnum");
let FindFirstSaleOrThrowArgs = class FindFirstSaleOrThrowArgs {
};
exports.FindFirstSaleOrThrowArgs = FindFirstSaleOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereInput_1.SaleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereInput_1.SaleWhereInput)
], FindFirstSaleOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleOrderByWithRelationInput_1.SaleOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSaleOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereUniqueInput_1.SaleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereUniqueInput_1.SaleWhereUniqueInput)
], FindFirstSaleOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSaleOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSaleOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleScalarFieldEnum_1.SaleScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSaleOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstSaleOrThrowArgs = FindFirstSaleOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSaleOrThrowArgs);
