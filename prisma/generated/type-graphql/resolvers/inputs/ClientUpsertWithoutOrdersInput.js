"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpsertWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateWithoutOrdersInput_1 = require("../inputs/ClientCreateWithoutOrdersInput");
const ClientUpdateWithoutOrdersInput_1 = require("../inputs/ClientUpdateWithoutOrdersInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpsertWithoutOrdersInput = class ClientUpsertWithoutOrdersInput {
};
exports.ClientUpsertWithoutOrdersInput = ClientUpsertWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateWithoutOrdersInput_1.ClientUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUpdateWithoutOrdersInput_1.ClientUpdateWithoutOrdersInput)
], ClientUpsertWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutOrdersInput_1.ClientCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutOrdersInput_1.ClientCreateWithoutOrdersInput)
], ClientUpsertWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpsertWithoutOrdersInput.prototype, "where", void 0);
exports.ClientUpsertWithoutOrdersInput = ClientUpsertWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpsertWithoutOrdersInput", {})
], ClientUpsertWithoutOrdersInput);
