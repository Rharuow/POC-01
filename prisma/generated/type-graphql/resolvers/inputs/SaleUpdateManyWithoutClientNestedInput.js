"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleUpdateManyWithoutClientNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCreateManyClientInputEnvelope_1 = require("../inputs/SaleCreateManyClientInputEnvelope");
const SaleCreateOrConnectWithoutClientInput_1 = require("../inputs/SaleCreateOrConnectWithoutClientInput");
const SaleCreateWithoutClientInput_1 = require("../inputs/SaleCreateWithoutClientInput");
const SaleScalarWhereInput_1 = require("../inputs/SaleScalarWhereInput");
const SaleUpdateManyWithWhereWithoutClientInput_1 = require("../inputs/SaleUpdateManyWithWhereWithoutClientInput");
const SaleUpdateWithWhereUniqueWithoutClientInput_1 = require("../inputs/SaleUpdateWithWhereUniqueWithoutClientInput");
const SaleUpsertWithWhereUniqueWithoutClientInput_1 = require("../inputs/SaleUpsertWithWhereUniqueWithoutClientInput");
const SaleWhereUniqueInput_1 = require("../inputs/SaleWhereUniqueInput");
let SaleUpdateManyWithoutClientNestedInput = class SaleUpdateManyWithoutClientNestedInput {
};
exports.SaleUpdateManyWithoutClientNestedInput = SaleUpdateManyWithoutClientNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleCreateWithoutClientInput_1.SaleCreateWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleUpdateManyWithoutClientNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleCreateOrConnectWithoutClientInput_1.SaleCreateOrConnectWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleUpdateManyWithoutClientNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleUpsertWithWhereUniqueWithoutClientInput_1.SaleUpsertWithWhereUniqueWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleUpdateManyWithoutClientNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateManyClientInputEnvelope_1.SaleCreateManyClientInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleCreateManyClientInputEnvelope_1.SaleCreateManyClientInputEnvelope)
], SaleUpdateManyWithoutClientNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleWhereUniqueInput_1.SaleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleUpdateManyWithoutClientNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleWhereUniqueInput_1.SaleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleUpdateManyWithoutClientNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleWhereUniqueInput_1.SaleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleUpdateManyWithoutClientNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleWhereUniqueInput_1.SaleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleUpdateManyWithoutClientNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleUpdateWithWhereUniqueWithoutClientInput_1.SaleUpdateWithWhereUniqueWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleUpdateManyWithoutClientNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleUpdateManyWithWhereWithoutClientInput_1.SaleUpdateManyWithWhereWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleUpdateManyWithoutClientNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleScalarWhereInput_1.SaleScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleUpdateManyWithoutClientNestedInput.prototype, "deleteMany", void 0);
exports.SaleUpdateManyWithoutClientNestedInput = SaleUpdateManyWithoutClientNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleUpdateManyWithoutClientNestedInput", {})
], SaleUpdateManyWithoutClientNestedInput);
