"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCategoriesProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsOrderByWithRelationInput_1 = require("../../../inputs/CategoriesProductsOrderByWithRelationInput");
const CategoriesProductsWhereInput_1 = require("../../../inputs/CategoriesProductsWhereInput");
const CategoriesProductsWhereUniqueInput_1 = require("../../../inputs/CategoriesProductsWhereUniqueInput");
const CategoriesProductsScalarFieldEnum_1 = require("../../../../enums/CategoriesProductsScalarFieldEnum");
let FindManyCategoriesProductsArgs = class FindManyCategoriesProductsArgs {
};
exports.FindManyCategoriesProductsArgs = FindManyCategoriesProductsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereInput_1.CategoriesProductsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereInput_1.CategoriesProductsWhereInput)
], FindManyCategoriesProductsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsOrderByWithRelationInput_1.CategoriesProductsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCategoriesProductsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput)
], FindManyCategoriesProductsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCategoriesProductsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCategoriesProductsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsScalarFieldEnum_1.CategoriesProductsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCategoriesProductsArgs.prototype, "distinct", void 0);
exports.FindManyCategoriesProductsArgs = FindManyCategoriesProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCategoriesProductsArgs);
