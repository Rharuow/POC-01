"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateOrConnectWithoutDocumentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateWithoutDocumentInput_1 = require("../inputs/ClientCreateWithoutDocumentInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateOrConnectWithoutDocumentInput = class ClientCreateOrConnectWithoutDocumentInput {
};
exports.ClientCreateOrConnectWithoutDocumentInput = ClientCreateOrConnectWithoutDocumentInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateOrConnectWithoutDocumentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutDocumentInput_1.ClientCreateWithoutDocumentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutDocumentInput_1.ClientCreateWithoutDocumentInput)
], ClientCreateOrConnectWithoutDocumentInput.prototype, "create", void 0);
exports.ClientCreateOrConnectWithoutDocumentInput = ClientCreateOrConnectWithoutDocumentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateOrConnectWithoutDocumentInput", {})
], ClientCreateOrConnectWithoutDocumentInput);
