"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCategoriesProductsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsWhereUniqueInput_1 = require("../../../inputs/CategoriesProductsWhereUniqueInput");
let FindUniqueCategoriesProductsOrThrowArgs = class FindUniqueCategoriesProductsOrThrowArgs {
};
exports.FindUniqueCategoriesProductsOrThrowArgs = FindUniqueCategoriesProductsOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput)
], FindUniqueCategoriesProductsOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueCategoriesProductsOrThrowArgs = FindUniqueCategoriesProductsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCategoriesProductsOrThrowArgs);
