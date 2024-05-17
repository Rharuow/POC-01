"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsCreateOrConnectWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateWithoutCategoryInput_1 = require("../inputs/CategoriesProductsCreateWithoutCategoryInput");
const CategoriesProductsWhereUniqueInput_1 = require("../inputs/CategoriesProductsWhereUniqueInput");
let CategoriesProductsCreateOrConnectWithoutCategoryInput = class CategoriesProductsCreateOrConnectWithoutCategoryInput {
};
exports.CategoriesProductsCreateOrConnectWithoutCategoryInput = CategoriesProductsCreateOrConnectWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput)
], CategoriesProductsCreateOrConnectWithoutCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCreateWithoutCategoryInput_1.CategoriesProductsCreateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCreateWithoutCategoryInput_1.CategoriesProductsCreateWithoutCategoryInput)
], CategoriesProductsCreateOrConnectWithoutCategoryInput.prototype, "create", void 0);
exports.CategoriesProductsCreateOrConnectWithoutCategoryInput = CategoriesProductsCreateOrConnectWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsCreateOrConnectWithoutCategoryInput", {})
], CategoriesProductsCreateOrConnectWithoutCategoryInput);
