"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsUpdateWithWhereUniqueWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsUpdateWithoutProductInput_1 = require("../inputs/CategoriesProductsUpdateWithoutProductInput");
const CategoriesProductsWhereUniqueInput_1 = require("../inputs/CategoriesProductsWhereUniqueInput");
let CategoriesProductsUpdateWithWhereUniqueWithoutProductInput = class CategoriesProductsUpdateWithWhereUniqueWithoutProductInput {
};
exports.CategoriesProductsUpdateWithWhereUniqueWithoutProductInput = CategoriesProductsUpdateWithWhereUniqueWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput)
], CategoriesProductsUpdateWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsUpdateWithoutProductInput_1.CategoriesProductsUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsUpdateWithoutProductInput_1.CategoriesProductsUpdateWithoutProductInput)
], CategoriesProductsUpdateWithWhereUniqueWithoutProductInput.prototype, "data", void 0);
exports.CategoriesProductsUpdateWithWhereUniqueWithoutProductInput = CategoriesProductsUpdateWithWhereUniqueWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsUpdateWithWhereUniqueWithoutProductInput", {})
], CategoriesProductsUpdateWithWhereUniqueWithoutProductInput);
