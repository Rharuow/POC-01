"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpsertWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateWithoutClientInput_1 = require("../inputs/AddressCreateWithoutClientInput");
const AddressUpdateWithoutClientInput_1 = require("../inputs/AddressUpdateWithoutClientInput");
const AddressWhereInput_1 = require("../inputs/AddressWhereInput");
let AddressUpsertWithoutClientInput = class AddressUpsertWithoutClientInput {
};
exports.AddressUpsertWithoutClientInput = AddressUpsertWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateWithoutClientInput_1.AddressUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUpdateWithoutClientInput_1.AddressUpdateWithoutClientInput)
], AddressUpsertWithoutClientInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateWithoutClientInput_1.AddressCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressCreateWithoutClientInput_1.AddressCreateWithoutClientInput)
], AddressUpsertWithoutClientInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressUpsertWithoutClientInput.prototype, "where", void 0);
exports.AddressUpsertWithoutClientInput = AddressUpsertWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUpsertWithoutClientInput", {})
], AddressUpsertWithoutClientInput);
