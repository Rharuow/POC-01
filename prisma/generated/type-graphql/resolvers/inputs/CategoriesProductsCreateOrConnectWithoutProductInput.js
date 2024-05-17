"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsCreateOrConnectWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateWithoutProductInput_1 = require("../inputs/CategoriesProductsCreateWithoutProductInput");
const CategoriesProductsWhereUniqueInput_1 = require("../inputs/CategoriesProductsWhereUniqueInput");
let CategoriesProductsCreateOrConnectWithoutProductInput = class CategoriesProductsCreateOrConnectWithoutProductInput {
};
exports.CategoriesProductsCreateOrConnectWithoutProductInput = CategoriesProductsCreateOrConnectWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput)
], CategoriesProductsCreateOrConnectWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCreateWithoutProductInput_1.CategoriesProductsCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCreateWithoutProductInput_1.CategoriesProductsCreateWithoutProductInput)
], CategoriesProductsCreateOrConnectWithoutProductInput.prototype, "create", void 0);
exports.CategoriesProductsCreateOrConnectWithoutProductInput = CategoriesProductsCreateOrConnectWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsCreateOrConnectWithoutProductInput", {})
], CategoriesProductsCreateOrConnectWithoutProductInput);
