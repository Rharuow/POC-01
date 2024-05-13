"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateToOneWithWhereWithoutDocumentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUpdateWithoutDocumentInput_1 = require("../inputs/ClientUpdateWithoutDocumentInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpdateToOneWithWhereWithoutDocumentInput = class ClientUpdateToOneWithWhereWithoutDocumentInput {
};
exports.ClientUpdateToOneWithWhereWithoutDocumentInput = ClientUpdateToOneWithWhereWithoutDocumentInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateToOneWithWhereWithoutDocumentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateWithoutDocumentInput_1.ClientUpdateWithoutDocumentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUpdateWithoutDocumentInput_1.ClientUpdateWithoutDocumentInput)
], ClientUpdateToOneWithWhereWithoutDocumentInput.prototype, "data", void 0);
exports.ClientUpdateToOneWithWhereWithoutDocumentInput = ClientUpdateToOneWithWhereWithoutDocumentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateToOneWithWhereWithoutDocumentInput", {})
], ClientUpdateToOneWithWhereWithoutDocumentInput);
