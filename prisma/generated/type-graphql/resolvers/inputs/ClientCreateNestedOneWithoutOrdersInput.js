"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateNestedOneWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutOrdersInput_1 = require("../inputs/ClientCreateOrConnectWithoutOrdersInput");
const ClientCreateWithoutOrdersInput_1 = require("../inputs/ClientCreateWithoutOrdersInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateNestedOneWithoutOrdersInput = class ClientCreateNestedOneWithoutOrdersInput {
};
exports.ClientCreateNestedOneWithoutOrdersInput = ClientCreateNestedOneWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutOrdersInput_1.ClientCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutOrdersInput_1.ClientCreateWithoutOrdersInput)
], ClientCreateNestedOneWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutOrdersInput_1.ClientCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutOrdersInput_1.ClientCreateOrConnectWithoutOrdersInput)
], ClientCreateNestedOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateNestedOneWithoutOrdersInput.prototype, "connect", void 0);
exports.ClientCreateNestedOneWithoutOrdersInput = ClientCreateNestedOneWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateNestedOneWithoutOrdersInput", {})
], ClientCreateNestedOneWithoutOrdersInput);
