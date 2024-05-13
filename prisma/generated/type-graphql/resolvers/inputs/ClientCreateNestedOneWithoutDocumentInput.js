"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateNestedOneWithoutDocumentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutDocumentInput_1 = require("../inputs/ClientCreateOrConnectWithoutDocumentInput");
const ClientCreateWithoutDocumentInput_1 = require("../inputs/ClientCreateWithoutDocumentInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateNestedOneWithoutDocumentInput = class ClientCreateNestedOneWithoutDocumentInput {
};
exports.ClientCreateNestedOneWithoutDocumentInput = ClientCreateNestedOneWithoutDocumentInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutDocumentInput_1.ClientCreateWithoutDocumentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutDocumentInput_1.ClientCreateWithoutDocumentInput)
], ClientCreateNestedOneWithoutDocumentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutDocumentInput_1.ClientCreateOrConnectWithoutDocumentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutDocumentInput_1.ClientCreateOrConnectWithoutDocumentInput)
], ClientCreateNestedOneWithoutDocumentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateNestedOneWithoutDocumentInput.prototype, "connect", void 0);
exports.ClientCreateNestedOneWithoutDocumentInput = ClientCreateNestedOneWithoutDocumentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateNestedOneWithoutDocumentInput", {})
], ClientCreateNestedOneWithoutDocumentInput);
