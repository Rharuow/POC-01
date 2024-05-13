"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateToOneWithWhereWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUpdateWithoutAddressInput_1 = require("../inputs/ClientUpdateWithoutAddressInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpdateToOneWithWhereWithoutAddressInput = class ClientUpdateToOneWithWhereWithoutAddressInput {
};
exports.ClientUpdateToOneWithWhereWithoutAddressInput = ClientUpdateToOneWithWhereWithoutAddressInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateToOneWithWhereWithoutAddressInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateWithoutAddressInput_1.ClientUpdateWithoutAddressInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUpdateWithoutAddressInput_1.ClientUpdateWithoutAddressInput)
], ClientUpdateToOneWithWhereWithoutAddressInput.prototype, "data", void 0);
exports.ClientUpdateToOneWithWhereWithoutAddressInput = ClientUpdateToOneWithWhereWithoutAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateToOneWithWhereWithoutAddressInput", {})
], ClientUpdateToOneWithWhereWithoutAddressInput);
