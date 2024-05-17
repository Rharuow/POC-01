"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsCreateNestedManyWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateManyProductInputEnvelope_1 = require("../inputs/CategoriesProductsCreateManyProductInputEnvelope");
const CategoriesProductsCreateOrConnectWithoutProductInput_1 = require("../inputs/CategoriesProductsCreateOrConnectWithoutProductInput");
const CategoriesProductsCreateWithoutProductInput_1 = require("../inputs/CategoriesProductsCreateWithoutProductInput");
const CategoriesProductsWhereUniqueInput_1 = require("../inputs/CategoriesProductsWhereUniqueInput");
let CategoriesProductsCreateNestedManyWithoutProductInput = class CategoriesProductsCreateNestedManyWithoutProductInput {
};
exports.CategoriesProductsCreateNestedManyWithoutProductInput = CategoriesProductsCreateNestedManyWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsCreateWithoutProductInput_1.CategoriesProductsCreateWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsCreateNestedManyWithoutProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsCreateOrConnectWithoutProductInput_1.CategoriesProductsCreateOrConnectWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsCreateNestedManyWithoutProductInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCreateManyProductInputEnvelope_1.CategoriesProductsCreateManyProductInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCreateManyProductInputEnvelope_1.CategoriesProductsCreateManyProductInputEnvelope)
], CategoriesProductsCreateNestedManyWithoutProductInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsCreateNestedManyWithoutProductInput.prototype, "connect", void 0);
exports.CategoriesProductsCreateNestedManyWithoutProductInput = CategoriesProductsCreateNestedManyWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsCreateNestedManyWithoutProductInput", {})
], CategoriesProductsCreateNestedManyWithoutProductInput);
