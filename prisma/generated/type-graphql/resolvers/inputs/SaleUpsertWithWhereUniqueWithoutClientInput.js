"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleUpsertWithWhereUniqueWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCreateWithoutClientInput_1 = require("../inputs/SaleCreateWithoutClientInput");
const SaleUpdateWithoutClientInput_1 = require("../inputs/SaleUpdateWithoutClientInput");
const SaleWhereUniqueInput_1 = require("../inputs/SaleWhereUniqueInput");
let SaleUpsertWithWhereUniqueWithoutClientInput = class SaleUpsertWithWhereUniqueWithoutClientInput {
};
exports.SaleUpsertWithWhereUniqueWithoutClientInput = SaleUpsertWithWhereUniqueWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereUniqueInput_1.SaleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleWhereUniqueInput_1.SaleWhereUniqueInput)
], SaleUpsertWithWhereUniqueWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleUpdateWithoutClientInput_1.SaleUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleUpdateWithoutClientInput_1.SaleUpdateWithoutClientInput)
], SaleUpsertWithWhereUniqueWithoutClientInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateWithoutClientInput_1.SaleCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleCreateWithoutClientInput_1.SaleCreateWithoutClientInput)
], SaleUpsertWithWhereUniqueWithoutClientInput.prototype, "create", void 0);
exports.SaleUpsertWithWhereUniqueWithoutClientInput = SaleUpsertWithWhereUniqueWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleUpsertWithWhereUniqueWithoutClientInput", {})
], SaleUpsertWithWhereUniqueWithoutClientInput);
