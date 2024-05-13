"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpdateToOneWithWhereWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUpdateWithoutClientInput_1 = require("../inputs/AddressUpdateWithoutClientInput");
const AddressWhereInput_1 = require("../inputs/AddressWhereInput");
let AddressUpdateToOneWithWhereWithoutClientInput = class AddressUpdateToOneWithWhereWithoutClientInput {
};
exports.AddressUpdateToOneWithWhereWithoutClientInput = AddressUpdateToOneWithWhereWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressUpdateToOneWithWhereWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateWithoutClientInput_1.AddressUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUpdateWithoutClientInput_1.AddressUpdateWithoutClientInput)
], AddressUpdateToOneWithWhereWithoutClientInput.prototype, "data", void 0);
exports.AddressUpdateToOneWithWhereWithoutClientInput = AddressUpdateToOneWithWhereWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUpdateToOneWithWhereWithoutClientInput", {})
], AddressUpdateToOneWithWhereWithoutClientInput);
