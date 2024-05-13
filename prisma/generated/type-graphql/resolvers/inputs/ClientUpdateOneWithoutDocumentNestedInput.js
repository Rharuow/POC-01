"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateOneWithoutDocumentNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutDocumentInput_1 = require("../inputs/ClientCreateOrConnectWithoutDocumentInput");
const ClientCreateWithoutDocumentInput_1 = require("../inputs/ClientCreateWithoutDocumentInput");
const ClientUpdateToOneWithWhereWithoutDocumentInput_1 = require("../inputs/ClientUpdateToOneWithWhereWithoutDocumentInput");
const ClientUpsertWithoutDocumentInput_1 = require("../inputs/ClientUpsertWithoutDocumentInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientUpdateOneWithoutDocumentNestedInput = class ClientUpdateOneWithoutDocumentNestedInput {
};
exports.ClientUpdateOneWithoutDocumentNestedInput = ClientUpdateOneWithoutDocumentNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutDocumentInput_1.ClientCreateWithoutDocumentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutDocumentInput_1.ClientCreateWithoutDocumentInput)
], ClientUpdateOneWithoutDocumentNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutDocumentInput_1.ClientCreateOrConnectWithoutDocumentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutDocumentInput_1.ClientCreateOrConnectWithoutDocumentInput)
], ClientUpdateOneWithoutDocumentNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpsertWithoutDocumentInput_1.ClientUpsertWithoutDocumentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpsertWithoutDocumentInput_1.ClientUpsertWithoutDocumentInput)
], ClientUpdateOneWithoutDocumentNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateOneWithoutDocumentNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateOneWithoutDocumentNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientUpdateOneWithoutDocumentNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateToOneWithWhereWithoutDocumentInput_1.ClientUpdateToOneWithWhereWithoutDocumentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpdateToOneWithWhereWithoutDocumentInput_1.ClientUpdateToOneWithWhereWithoutDocumentInput)
], ClientUpdateOneWithoutDocumentNestedInput.prototype, "update", void 0);
exports.ClientUpdateOneWithoutDocumentNestedInput = ClientUpdateOneWithoutDocumentNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateOneWithoutDocumentNestedInput", {})
], ClientUpdateOneWithoutDocumentNestedInput);
