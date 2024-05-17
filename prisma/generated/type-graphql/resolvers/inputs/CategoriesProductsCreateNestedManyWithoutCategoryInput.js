"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsCreateNestedManyWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateManyCategoryInputEnvelope_1 = require("../inputs/CategoriesProductsCreateManyCategoryInputEnvelope");
const CategoriesProductsCreateOrConnectWithoutCategoryInput_1 = require("../inputs/CategoriesProductsCreateOrConnectWithoutCategoryInput");
const CategoriesProductsCreateWithoutCategoryInput_1 = require("../inputs/CategoriesProductsCreateWithoutCategoryInput");
const CategoriesProductsWhereUniqueInput_1 = require("../inputs/CategoriesProductsWhereUniqueInput");
let CategoriesProductsCreateNestedManyWithoutCategoryInput = class CategoriesProductsCreateNestedManyWithoutCategoryInput {
};
exports.CategoriesProductsCreateNestedManyWithoutCategoryInput = CategoriesProductsCreateNestedManyWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsCreateWithoutCategoryInput_1.CategoriesProductsCreateWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsCreateNestedManyWithoutCategoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsCreateOrConnectWithoutCategoryInput_1.CategoriesProductsCreateOrConnectWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsCreateNestedManyWithoutCategoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCreateManyCategoryInputEnvelope_1.CategoriesProductsCreateManyCategoryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCreateManyCategoryInputEnvelope_1.CategoriesProductsCreateManyCategoryInputEnvelope)
], CategoriesProductsCreateNestedManyWithoutCategoryInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsCreateNestedManyWithoutCategoryInput.prototype, "connect", void 0);
exports.CategoriesProductsCreateNestedManyWithoutCategoryInput = CategoriesProductsCreateNestedManyWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsCreateNestedManyWithoutCategoryInput", {})
], CategoriesProductsCreateNestedManyWithoutCategoryInput);
