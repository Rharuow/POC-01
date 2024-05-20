"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateOrConnectWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateWithoutOrdersInput_1 = require("../inputs/ClientCreateWithoutOrdersInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateOrConnectWithoutOrdersInput = class ClientCreateOrConnectWithoutOrdersInput {
};
exports.ClientCreateOrConnectWithoutOrdersInput = ClientCreateOrConnectWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateOrConnectWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutOrdersInput_1.ClientCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutOrdersInput_1.ClientCreateWithoutOrdersInput)
], ClientCreateOrConnectWithoutOrdersInput.prototype, "create", void 0);
exports.ClientCreateOrConnectWithoutOrdersInput = ClientCreateOrConnectWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateOrConnectWithoutOrdersInput", {})
], ClientCreateOrConnectWithoutOrdersInput);
