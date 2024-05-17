"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsUpsertWithWhereUniqueWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateWithoutProductInput_1 = require("../inputs/CategoriesProductsCreateWithoutProductInput");
const CategoriesProductsUpdateWithoutProductInput_1 = require("../inputs/CategoriesProductsUpdateWithoutProductInput");
const CategoriesProductsWhereUniqueInput_1 = require("../inputs/CategoriesProductsWhereUniqueInput");
let CategoriesProductsUpsertWithWhereUniqueWithoutProductInput = class CategoriesProductsUpsertWithWhereUniqueWithoutProductInput {
};
exports.CategoriesProductsUpsertWithWhereUniqueWithoutProductInput = CategoriesProductsUpsertWithWhereUniqueWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput)
], CategoriesProductsUpsertWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsUpdateWithoutProductInput_1.CategoriesProductsUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsUpdateWithoutProductInput_1.CategoriesProductsUpdateWithoutProductInput)
], CategoriesProductsUpsertWithWhereUniqueWithoutProductInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCreateWithoutProductInput_1.CategoriesProductsCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCreateWithoutProductInput_1.CategoriesProductsCreateWithoutProductInput)
], CategoriesProductsUpsertWithWhereUniqueWithoutProductInput.prototype, "create", void 0);
exports.CategoriesProductsUpsertWithWhereUniqueWithoutProductInput = CategoriesProductsUpsertWithWhereUniqueWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsUpsertWithWhereUniqueWithoutProductInput", {})
], CategoriesProductsUpsertWithWhereUniqueWithoutProductInput);
