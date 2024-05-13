"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySaleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleOrderByWithAggregationInput_1 = require("../../../inputs/SaleOrderByWithAggregationInput");
const SaleScalarWhereWithAggregatesInput_1 = require("../../../inputs/SaleScalarWhereWithAggregatesInput");
const SaleWhereInput_1 = require("../../../inputs/SaleWhereInput");
const SaleScalarFieldEnum_1 = require("../../../../enums/SaleScalarFieldEnum");
let GroupBySaleArgs = class GroupBySaleArgs {
};
exports.GroupBySaleArgs = GroupBySaleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereInput_1.SaleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereInput_1.SaleWhereInput)
], GroupBySaleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleOrderByWithAggregationInput_1.SaleOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySaleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleScalarFieldEnum_1.SaleScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySaleArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleScalarWhereWithAggregatesInput_1.SaleScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleScalarWhereWithAggregatesInput_1.SaleScalarWhereWithAggregatesInput)
], GroupBySaleArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySaleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySaleArgs.prototype, "skip", void 0);
exports.GroupBySaleArgs = GroupBySaleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySaleArgs);
