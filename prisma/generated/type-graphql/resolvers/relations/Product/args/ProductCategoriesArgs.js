"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsOrderByWithRelationInput_1 = require("../../../inputs/CategoriesProductsOrderByWithRelationInput");
const CategoriesProductsWhereInput_1 = require("../../../inputs/CategoriesProductsWhereInput");
const CategoriesProductsWhereUniqueInput_1 = require("../../../inputs/CategoriesProductsWhereUniqueInput");
const CategoriesProductsScalarFieldEnum_1 = require("../../../../enums/CategoriesProductsScalarFieldEnum");
let ProductCategoriesArgs = class ProductCategoriesArgs {
};
exports.ProductCategoriesArgs = ProductCategoriesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereInput_1.CategoriesProductsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereInput_1.CategoriesProductsWhereInput)
], ProductCategoriesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsOrderByWithRelationInput_1.CategoriesProductsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCategoriesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput)
], ProductCategoriesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCategoriesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCategoriesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsScalarFieldEnum_1.CategoriesProductsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCategoriesArgs.prototype, "distinct", void 0);
exports.ProductCategoriesArgs = ProductCategoriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProductCategoriesArgs);
