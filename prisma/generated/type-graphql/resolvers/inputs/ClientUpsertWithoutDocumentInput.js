"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpsertWithoutDocumentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateWithoutDocumentInput_1 = require("../inputs/ClientCreateWithoutDocumentInput");
const ClientUpdateWithoutDocumentInput_1 = require("../inputs/ClientUpdateWithoutDocumentInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpsertWithoutDocumentInput = class ClientUpsertWithoutDocumentInput {
};
exports.ClientUpsertWithoutDocumentInput = ClientUpsertWithoutDocumentInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateWithoutDocumentInput_1.ClientUpdateWithoutDocumentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUpdateWithoutDocumentInput_1.ClientUpdateWithoutDocumentInput)
], ClientUpsertWithoutDocumentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutDocumentInput_1.ClientCreateWithoutDocumentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutDocumentInput_1.ClientCreateWithoutDocumentInput)
], ClientUpsertWithoutDocumentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpsertWithoutDocumentInput.prototype, "where", void 0);
exports.ClientUpsertWithoutDocumentInput = ClientUpsertWithoutDocumentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpsertWithoutDocumentInput", {})
], ClientUpsertWithoutDocumentInput);
