"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSaleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleOrderByWithRelationInput_1 = require("../../../inputs/SaleOrderByWithRelationInput");
const SaleWhereInput_1 = require("../../../inputs/SaleWhereInput");
const SaleWhereUniqueInput_1 = require("../../../inputs/SaleWhereUniqueInput");
const SaleScalarFieldEnum_1 = require("../../../../enums/SaleScalarFieldEnum");
let FindFirstSaleArgs = class FindFirstSaleArgs {
};
exports.FindFirstSaleArgs = FindFirstSaleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereInput_1.SaleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereInput_1.SaleWhereInput)
], FindFirstSaleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleOrderByWithRelationInput_1.SaleOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSaleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereUniqueInput_1.SaleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereUniqueInput_1.SaleWhereUniqueInput)
], FindFirstSaleArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSaleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSaleArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleScalarFieldEnum_1.SaleScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSaleArgs.prototype, "distinct", void 0);
exports.FindFirstSaleArgs = FindFirstSaleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSaleArgs);
