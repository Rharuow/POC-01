"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateOneRequiredWithoutDocumentNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutDocumentInput_1 = require("../inputs/ClientCreateOrConnectWithoutDocumentInput");
const ClientCreateWithoutDocumentInput_1 = require("../inputs/ClientCreateWithoutDocumentInput");
const ClientUpdateToOneWithWhereWithoutDocumentInput_1 = require("../inputs/ClientUpdateToOneWithWhereWithoutDocumentInput");
const ClientUpsertWithoutDocumentInput_1 = require("../inputs/ClientUpsertWithoutDocumentInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientUpdateOneRequiredWithoutDocumentNestedInput = class ClientUpdateOneRequiredWithoutDocumentNestedInput {
};
exports.ClientUpdateOneRequiredWithoutDocumentNestedInput = ClientUpdateOneRequiredWithoutDocumentNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutDocumentInput_1.ClientCreateWithoutDocumentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutDocumentInput_1.ClientCreateWithoutDocumentInput)
], ClientUpdateOneRequiredWithoutDocumentNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutDocumentInput_1.ClientCreateOrConnectWithoutDocumentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutDocumentInput_1.ClientCreateOrConnectWithoutDocumentInput)
], ClientUpdateOneRequiredWithoutDocumentNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpsertWithoutDocumentInput_1.ClientUpsertWithoutDocumentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpsertWithoutDocumentInput_1.ClientUpsertWithoutDocumentInput)
], ClientUpdateOneRequiredWithoutDocumentNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientUpdateOneRequiredWithoutDocumentNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateToOneWithWhereWithoutDocumentInput_1.ClientUpdateToOneWithWhereWithoutDocumentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpdateToOneWithWhereWithoutDocumentInput_1.ClientUpdateToOneWithWhereWithoutDocumentInput)
], ClientUpdateOneRequiredWithoutDocumentNestedInput.prototype, "update", void 0);
exports.ClientUpdateOneRequiredWithoutDocumentNestedInput = ClientUpdateOneRequiredWithoutDocumentNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateOneRequiredWithoutDocumentNestedInput", {})
], ClientUpdateOneRequiredWithoutDocumentNestedInput);
