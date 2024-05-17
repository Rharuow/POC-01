"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsUpdateManyWithoutCategoryNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateManyCategoryInputEnvelope_1 = require("../inputs/CategoriesProductsCreateManyCategoryInputEnvelope");
const CategoriesProductsCreateOrConnectWithoutCategoryInput_1 = require("../inputs/CategoriesProductsCreateOrConnectWithoutCategoryInput");
const CategoriesProductsCreateWithoutCategoryInput_1 = require("../inputs/CategoriesProductsCreateWithoutCategoryInput");
const CategoriesProductsScalarWhereInput_1 = require("../inputs/CategoriesProductsScalarWhereInput");
const CategoriesProductsUpdateManyWithWhereWithoutCategoryInput_1 = require("../inputs/CategoriesProductsUpdateManyWithWhereWithoutCategoryInput");
const CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput_1 = require("../inputs/CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput");
const CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput_1 = require("../inputs/CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput");
const CategoriesProductsWhereUniqueInput_1 = require("../inputs/CategoriesProductsWhereUniqueInput");
let CategoriesProductsUpdateManyWithoutCategoryNestedInput = class CategoriesProductsUpdateManyWithoutCategoryNestedInput {
};
exports.CategoriesProductsUpdateManyWithoutCategoryNestedInput = CategoriesProductsUpdateManyWithoutCategoryNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsCreateWithoutCategoryInput_1.CategoriesProductsCreateWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutCategoryNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsCreateOrConnectWithoutCategoryInput_1.CategoriesProductsCreateOrConnectWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutCategoryNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput_1.CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutCategoryNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCreateManyCategoryInputEnvelope_1.CategoriesProductsCreateManyCategoryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCreateManyCategoryInputEnvelope_1.CategoriesProductsCreateManyCategoryInputEnvelope)
], CategoriesProductsUpdateManyWithoutCategoryNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutCategoryNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutCategoryNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutCategoryNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutCategoryNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput_1.CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutCategoryNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsUpdateManyWithWhereWithoutCategoryInput_1.CategoriesProductsUpdateManyWithWhereWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutCategoryNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsScalarWhereInput_1.CategoriesProductsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutCategoryNestedInput.prototype, "deleteMany", void 0);
exports.CategoriesProductsUpdateManyWithoutCategoryNestedInput = CategoriesProductsUpdateManyWithoutCategoryNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsUpdateManyWithoutCategoryNestedInput", {})
], CategoriesProductsUpdateManyWithoutCategoryNestedInput);
