"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateNestedOneWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateOrConnectWithoutClientInput_1 = require("../inputs/AddressCreateOrConnectWithoutClientInput");
const AddressCreateWithoutClientInput_1 = require("../inputs/AddressCreateWithoutClientInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressCreateNestedOneWithoutClientInput = class AddressCreateNestedOneWithoutClientInput {
};
exports.AddressCreateNestedOneWithoutClientInput = AddressCreateNestedOneWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateWithoutClientInput_1.AddressCreateWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateWithoutClientInput_1.AddressCreateWithoutClientInput)
], AddressCreateNestedOneWithoutClientInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateOrConnectWithoutClientInput_1.AddressCreateOrConnectWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateOrConnectWithoutClientInput_1.AddressCreateOrConnectWithoutClientInput)
], AddressCreateNestedOneWithoutClientInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressCreateNestedOneWithoutClientInput.prototype, "connect", void 0);
exports.AddressCreateNestedOneWithoutClientInput = AddressCreateNestedOneWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressCreateNestedOneWithoutClientInput", {})
], AddressCreateNestedOneWithoutClientInput);
