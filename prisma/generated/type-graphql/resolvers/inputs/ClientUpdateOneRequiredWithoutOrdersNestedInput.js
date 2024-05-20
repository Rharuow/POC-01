"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateOneRequiredWithoutOrdersNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutOrdersInput_1 = require("../inputs/ClientCreateOrConnectWithoutOrdersInput");
const ClientCreateWithoutOrdersInput_1 = require("../inputs/ClientCreateWithoutOrdersInput");
const ClientUpdateToOneWithWhereWithoutOrdersInput_1 = require("../inputs/ClientUpdateToOneWithWhereWithoutOrdersInput");
const ClientUpsertWithoutOrdersInput_1 = require("../inputs/ClientUpsertWithoutOrdersInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientUpdateOneRequiredWithoutOrdersNestedInput = class ClientUpdateOneRequiredWithoutOrdersNestedInput {
};
exports.ClientUpdateOneRequiredWithoutOrdersNestedInput = ClientUpdateOneRequiredWithoutOrdersNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutOrdersInput_1.ClientCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutOrdersInput_1.ClientCreateWithoutOrdersInput)
], ClientUpdateOneRequiredWithoutOrdersNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutOrdersInput_1.ClientCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutOrdersInput_1.ClientCreateOrConnectWithoutOrdersInput)
], ClientUpdateOneRequiredWithoutOrdersNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpsertWithoutOrdersInput_1.ClientUpsertWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpsertWithoutOrdersInput_1.ClientUpsertWithoutOrdersInput)
], ClientUpdateOneRequiredWithoutOrdersNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientUpdateOneRequiredWithoutOrdersNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateToOneWithWhereWithoutOrdersInput_1.ClientUpdateToOneWithWhereWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpdateToOneWithWhereWithoutOrdersInput_1.ClientUpdateToOneWithWhereWithoutOrdersInput)
], ClientUpdateOneRequiredWithoutOrdersNestedInput.prototype, "update", void 0);
exports.ClientUpdateOneRequiredWithoutOrdersNestedInput = ClientUpdateOneRequiredWithoutOrdersNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateOneRequiredWithoutOrdersNestedInput", {})
], ClientUpdateOneRequiredWithoutOrdersNestedInput);
