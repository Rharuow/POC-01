"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleCreateNestedManyWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCreateManyClientInputEnvelope_1 = require("../inputs/SaleCreateManyClientInputEnvelope");
const SaleCreateOrConnectWithoutClientInput_1 = require("../inputs/SaleCreateOrConnectWithoutClientInput");
const SaleCreateWithoutClientInput_1 = require("../inputs/SaleCreateWithoutClientInput");
const SaleWhereUniqueInput_1 = require("../inputs/SaleWhereUniqueInput");
let SaleCreateNestedManyWithoutClientInput = class SaleCreateNestedManyWithoutClientInput {
};
exports.SaleCreateNestedManyWithoutClientInput = SaleCreateNestedManyWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleCreateWithoutClientInput_1.SaleCreateWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleCreateNestedManyWithoutClientInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleCreateOrConnectWithoutClientInput_1.SaleCreateOrConnectWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleCreateNestedManyWithoutClientInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateManyClientInputEnvelope_1.SaleCreateManyClientInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleCreateManyClientInputEnvelope_1.SaleCreateManyClientInputEnvelope)
], SaleCreateNestedManyWithoutClientInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleWhereUniqueInput_1.SaleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SaleCreateNestedManyWithoutClientInput.prototype, "connect", void 0);
exports.SaleCreateNestedManyWithoutClientInput = SaleCreateNestedManyWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleCreateNestedManyWithoutClientInput", {})
], SaleCreateNestedManyWithoutClientInput);
