"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateOrConnectWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateWithoutClientInput_1 = require("../inputs/AddressCreateWithoutClientInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressCreateOrConnectWithoutClientInput = class AddressCreateOrConnectWithoutClientInput {
};
exports.AddressCreateOrConnectWithoutClientInput = AddressCreateOrConnectWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressCreateOrConnectWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateWithoutClientInput_1.AddressCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressCreateWithoutClientInput_1.AddressCreateWithoutClientInput)
], AddressCreateOrConnectWithoutClientInput.prototype, "create", void 0);
exports.AddressCreateOrConnectWithoutClientInput = AddressCreateOrConnectWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressCreateOrConnectWithoutClientInput", {})
], AddressCreateOrConnectWithoutClientInput);
