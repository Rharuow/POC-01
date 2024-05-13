"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleUpdateWithWhereUniqueWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleUpdateWithoutClientInput_1 = require("../inputs/SaleUpdateWithoutClientInput");
const SaleWhereUniqueInput_1 = require("../inputs/SaleWhereUniqueInput");
let SaleUpdateWithWhereUniqueWithoutClientInput = class SaleUpdateWithWhereUniqueWithoutClientInput {
};
exports.SaleUpdateWithWhereUniqueWithoutClientInput = SaleUpdateWithWhereUniqueWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereUniqueInput_1.SaleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleWhereUniqueInput_1.SaleWhereUniqueInput)
], SaleUpdateWithWhereUniqueWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleUpdateWithoutClientInput_1.SaleUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleUpdateWithoutClientInput_1.SaleUpdateWithoutClientInput)
], SaleUpdateWithWhereUniqueWithoutClientInput.prototype, "data", void 0);
exports.SaleUpdateWithWhereUniqueWithoutClientInput = SaleUpdateWithWhereUniqueWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleUpdateWithWhereUniqueWithoutClientInput", {})
], SaleUpdateWithWhereUniqueWithoutClientInput);
