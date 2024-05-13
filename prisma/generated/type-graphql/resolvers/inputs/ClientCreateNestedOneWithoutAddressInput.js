"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateNestedOneWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutAddressInput_1 = require("../inputs/ClientCreateOrConnectWithoutAddressInput");
const ClientCreateWithoutAddressInput_1 = require("../inputs/ClientCreateWithoutAddressInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateNestedOneWithoutAddressInput = class ClientCreateNestedOneWithoutAddressInput {
};
exports.ClientCreateNestedOneWithoutAddressInput = ClientCreateNestedOneWithoutAddressInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutAddressInput_1.ClientCreateWithoutAddressInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutAddressInput_1.ClientCreateWithoutAddressInput)
], ClientCreateNestedOneWithoutAddressInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutAddressInput_1.ClientCreateOrConnectWithoutAddressInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutAddressInput_1.ClientCreateOrConnectWithoutAddressInput)
], ClientCreateNestedOneWithoutAddressInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateNestedOneWithoutAddressInput.prototype, "connect", void 0);
exports.ClientCreateNestedOneWithoutAddressInput = ClientCreateNestedOneWithoutAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateNestedOneWithoutAddressInput", {})
], ClientCreateNestedOneWithoutAddressInput);
