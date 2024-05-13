"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpsertWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateWithoutAddressInput_1 = require("../inputs/ClientCreateWithoutAddressInput");
const ClientUpdateWithoutAddressInput_1 = require("../inputs/ClientUpdateWithoutAddressInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpsertWithoutAddressInput = class ClientUpsertWithoutAddressInput {
};
exports.ClientUpsertWithoutAddressInput = ClientUpsertWithoutAddressInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateWithoutAddressInput_1.ClientUpdateWithoutAddressInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUpdateWithoutAddressInput_1.ClientUpdateWithoutAddressInput)
], ClientUpsertWithoutAddressInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutAddressInput_1.ClientCreateWithoutAddressInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutAddressInput_1.ClientCreateWithoutAddressInput)
], ClientUpsertWithoutAddressInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpsertWithoutAddressInput.prototype, "where", void 0);
exports.ClientUpsertWithoutAddressInput = ClientUpsertWithoutAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpsertWithoutAddressInput", {})
], ClientUpsertWithoutAddressInput);
