"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateOneRequiredWithoutAddressNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutAddressInput_1 = require("../inputs/ClientCreateOrConnectWithoutAddressInput");
const ClientCreateWithoutAddressInput_1 = require("../inputs/ClientCreateWithoutAddressInput");
const ClientUpdateToOneWithWhereWithoutAddressInput_1 = require("../inputs/ClientUpdateToOneWithWhereWithoutAddressInput");
const ClientUpsertWithoutAddressInput_1 = require("../inputs/ClientUpsertWithoutAddressInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientUpdateOneRequiredWithoutAddressNestedInput = class ClientUpdateOneRequiredWithoutAddressNestedInput {
};
exports.ClientUpdateOneRequiredWithoutAddressNestedInput = ClientUpdateOneRequiredWithoutAddressNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutAddressInput_1.ClientCreateWithoutAddressInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutAddressInput_1.ClientCreateWithoutAddressInput)
], ClientUpdateOneRequiredWithoutAddressNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutAddressInput_1.ClientCreateOrConnectWithoutAddressInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutAddressInput_1.ClientCreateOrConnectWithoutAddressInput)
], ClientUpdateOneRequiredWithoutAddressNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpsertWithoutAddressInput_1.ClientUpsertWithoutAddressInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpsertWithoutAddressInput_1.ClientUpsertWithoutAddressInput)
], ClientUpdateOneRequiredWithoutAddressNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientUpdateOneRequiredWithoutAddressNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateToOneWithWhereWithoutAddressInput_1.ClientUpdateToOneWithWhereWithoutAddressInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpdateToOneWithWhereWithoutAddressInput_1.ClientUpdateToOneWithWhereWithoutAddressInput)
], ClientUpdateOneRequiredWithoutAddressNestedInput.prototype, "update", void 0);
exports.ClientUpdateOneRequiredWithoutAddressNestedInput = ClientUpdateOneRequiredWithoutAddressNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateOneRequiredWithoutAddressNestedInput", {})
], ClientUpdateOneRequiredWithoutAddressNestedInput);
