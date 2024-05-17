"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsUpdateManyWithoutProductNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateManyProductInputEnvelope_1 = require("../inputs/CategoriesProductsCreateManyProductInputEnvelope");
const CategoriesProductsCreateOrConnectWithoutProductInput_1 = require("../inputs/CategoriesProductsCreateOrConnectWithoutProductInput");
const CategoriesProductsCreateWithoutProductInput_1 = require("../inputs/CategoriesProductsCreateWithoutProductInput");
const CategoriesProductsScalarWhereInput_1 = require("../inputs/CategoriesProductsScalarWhereInput");
const CategoriesProductsUpdateManyWithWhereWithoutProductInput_1 = require("../inputs/CategoriesProductsUpdateManyWithWhereWithoutProductInput");
const CategoriesProductsUpdateWithWhereUniqueWithoutProductInput_1 = require("../inputs/CategoriesProductsUpdateWithWhereUniqueWithoutProductInput");
const CategoriesProductsUpsertWithWhereUniqueWithoutProductInput_1 = require("../inputs/CategoriesProductsUpsertWithWhereUniqueWithoutProductInput");
const CategoriesProductsWhereUniqueInput_1 = require("../inputs/CategoriesProductsWhereUniqueInput");
let CategoriesProductsUpdateManyWithoutProductNestedInput = class CategoriesProductsUpdateManyWithoutProductNestedInput {
};
exports.CategoriesProductsUpdateManyWithoutProductNestedInput = CategoriesProductsUpdateManyWithoutProductNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsCreateWithoutProductInput_1.CategoriesProductsCreateWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutProductNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsCreateOrConnectWithoutProductInput_1.CategoriesProductsCreateOrConnectWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutProductNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsUpsertWithWhereUniqueWithoutProductInput_1.CategoriesProductsUpsertWithWhereUniqueWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutProductNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCreateManyProductInputEnvelope_1.CategoriesProductsCreateManyProductInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCreateManyProductInputEnvelope_1.CategoriesProductsCreateManyProductInputEnvelope)
], CategoriesProductsUpdateManyWithoutProductNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutProductNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutProductNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutProductNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutProductNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsUpdateWithWhereUniqueWithoutProductInput_1.CategoriesProductsUpdateWithWhereUniqueWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutProductNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsUpdateManyWithWhereWithoutProductInput_1.CategoriesProductsUpdateManyWithWhereWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutProductNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsScalarWhereInput_1.CategoriesProductsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsUpdateManyWithoutProductNestedInput.prototype, "deleteMany", void 0);
exports.CategoriesProductsUpdateManyWithoutProductNestedInput = CategoriesProductsUpdateManyWithoutProductNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsUpdateManyWithoutProductNestedInput", {})
], CategoriesProductsUpdateManyWithoutProductNestedInput);
