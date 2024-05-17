"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateWithoutCategoryInput_1 = require("../inputs/CategoriesProductsCreateWithoutCategoryInput");
const CategoriesProductsUpdateWithoutCategoryInput_1 = require("../inputs/CategoriesProductsUpdateWithoutCategoryInput");
const CategoriesProductsWhereUniqueInput_1 = require("../inputs/CategoriesProductsWhereUniqueInput");
let CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput = class CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput {
};
exports.CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput = CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput)
], CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsUpdateWithoutCategoryInput_1.CategoriesProductsUpdateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsUpdateWithoutCategoryInput_1.CategoriesProductsUpdateWithoutCategoryInput)
], CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCreateWithoutCategoryInput_1.CategoriesProductsCreateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCreateWithoutCategoryInput_1.CategoriesProductsCreateWithoutCategoryInput)
], CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput.prototype, "create", void 0);
exports.CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput = CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput", {})
], CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput);
