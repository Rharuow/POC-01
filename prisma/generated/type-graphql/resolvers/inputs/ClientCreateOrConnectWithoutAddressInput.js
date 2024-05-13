"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateOrConnectWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateWithoutAddressInput_1 = require("../inputs/ClientCreateWithoutAddressInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateOrConnectWithoutAddressInput = class ClientCreateOrConnectWithoutAddressInput {
};
exports.ClientCreateOrConnectWithoutAddressInput = ClientCreateOrConnectWithoutAddressInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateOrConnectWithoutAddressInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutAddressInput_1.ClientCreateWithoutAddressInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutAddressInput_1.ClientCreateWithoutAddressInput)
], ClientCreateOrConnectWithoutAddressInput.prototype, "create", void 0);
exports.ClientCreateOrConnectWithoutAddressInput = ClientCreateOrConnectWithoutAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateOrConnectWithoutAddressInput", {})
], ClientCreateOrConnectWithoutAddressInput);
