"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleUpdateManyWithWhereWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleScalarWhereInput_1 = require("../inputs/SaleScalarWhereInput");
const SaleUpdateManyMutationInput_1 = require("../inputs/SaleUpdateManyMutationInput");
let SaleUpdateManyWithWhereWithoutClientInput = class SaleUpdateManyWithWhereWithoutClientInput {
};
exports.SaleUpdateManyWithWhereWithoutClientInput = SaleUpdateManyWithWhereWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleScalarWhereInput_1.SaleScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleScalarWhereInput_1.SaleScalarWhereInput)
], SaleUpdateManyWithWhereWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleUpdateManyMutationInput_1.SaleUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleUpdateManyMutationInput_1.SaleUpdateManyMutationInput)
], SaleUpdateManyWithWhereWithoutClientInput.prototype, "data", void 0);
exports.SaleUpdateManyWithWhereWithoutClientInput = SaleUpdateManyWithWhereWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleUpdateManyWithWhereWithoutClientInput", {})
], SaleUpdateManyWithWhereWithoutClientInput);
