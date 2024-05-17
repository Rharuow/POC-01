"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCategoriesProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsOrderByWithAggregationInput_1 = require("../../../inputs/CategoriesProductsOrderByWithAggregationInput");
const CategoriesProductsScalarWhereWithAggregatesInput_1 = require("../../../inputs/CategoriesProductsScalarWhereWithAggregatesInput");
const CategoriesProductsWhereInput_1 = require("../../../inputs/CategoriesProductsWhereInput");
const CategoriesProductsScalarFieldEnum_1 = require("../../../../enums/CategoriesProductsScalarFieldEnum");
let GroupByCategoriesProductsArgs = class GroupByCategoriesProductsArgs {
};
exports.GroupByCategoriesProductsArgs = GroupByCategoriesProductsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereInput_1.CategoriesProductsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereInput_1.CategoriesProductsWhereInput)
], GroupByCategoriesProductsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsOrderByWithAggregationInput_1.CategoriesProductsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCategoriesProductsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsScalarFieldEnum_1.CategoriesProductsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCategoriesProductsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsScalarWhereWithAggregatesInput_1.CategoriesProductsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsScalarWhereWithAggregatesInput_1.CategoriesProductsScalarWhereWithAggregatesInput)
], GroupByCategoriesProductsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCategoriesProductsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCategoriesProductsArgs.prototype, "skip", void 0);
exports.GroupByCategoriesProductsArgs = GroupByCategoriesProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCategoriesProductsArgs);
