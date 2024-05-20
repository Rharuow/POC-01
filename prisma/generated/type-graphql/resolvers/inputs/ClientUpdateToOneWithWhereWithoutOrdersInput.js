"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateToOneWithWhereWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUpdateWithoutOrdersInput_1 = require("../inputs/ClientUpdateWithoutOrdersInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpdateToOneWithWhereWithoutOrdersInput = class ClientUpdateToOneWithWhereWithoutOrdersInput {
};
exports.ClientUpdateToOneWithWhereWithoutOrdersInput = ClientUpdateToOneWithWhereWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateToOneWithWhereWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateWithoutOrdersInput_1.ClientUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUpdateWithoutOrdersInput_1.ClientUpdateWithoutOrdersInput)
], ClientUpdateToOneWithWhereWithoutOrdersInput.prototype, "data", void 0);
exports.ClientUpdateToOneWithWhereWithoutOrdersInput = ClientUpdateToOneWithWhereWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateToOneWithWhereWithoutOrdersInput", {})
], ClientUpdateToOneWithWhereWithoutOrdersInput);
