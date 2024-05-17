"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsUpdateWithoutCategoryInput_1 = require("../inputs/CategoriesProductsUpdateWithoutCategoryInput");
const CategoriesProductsWhereUniqueInput_1 = require("../inputs/CategoriesProductsWhereUniqueInput");
let CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput = class CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput {
};
exports.CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput = CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput)
], CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsUpdateWithoutCategoryInput_1.CategoriesProductsUpdateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsUpdateWithoutCategoryInput_1.CategoriesProductsUpdateWithoutCategoryInput)
], CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput.prototype, "data", void 0);
exports.CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput = CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput", {})
], CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput);
