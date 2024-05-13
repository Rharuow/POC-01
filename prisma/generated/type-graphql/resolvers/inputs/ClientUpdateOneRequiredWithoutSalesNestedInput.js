"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateOneRequiredWithoutSalesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutSalesInput_1 = require("../inputs/ClientCreateOrConnectWithoutSalesInput");
const ClientCreateWithoutSalesInput_1 = require("../inputs/ClientCreateWithoutSalesInput");
const ClientUpdateToOneWithWhereWithoutSalesInput_1 = require("../inputs/ClientUpdateToOneWithWhereWithoutSalesInput");
const ClientUpsertWithoutSalesInput_1 = require("../inputs/ClientUpsertWithoutSalesInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientUpdateOneRequiredWithoutSalesNestedInput = class ClientUpdateOneRequiredWithoutSalesNestedInput {
};
exports.ClientUpdateOneRequiredWithoutSalesNestedInput = ClientUpdateOneRequiredWithoutSalesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutSalesInput_1.ClientCreateWithoutSalesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutSalesInput_1.ClientCreateWithoutSalesInput)
], ClientUpdateOneRequiredWithoutSalesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutSalesInput_1.ClientCreateOrConnectWithoutSalesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutSalesInput_1.ClientCreateOrConnectWithoutSalesInput)
], ClientUpdateOneRequiredWithoutSalesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpsertWithoutSalesInput_1.ClientUpsertWithoutSalesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpsertWithoutSalesInput_1.ClientUpsertWithoutSalesInput)
], ClientUpdateOneRequiredWithoutSalesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientUpdateOneRequiredWithoutSalesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateToOneWithWhereWithoutSalesInput_1.ClientUpdateToOneWithWhereWithoutSalesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpdateToOneWithWhereWithoutSalesInput_1.ClientUpdateToOneWithWhereWithoutSalesInput)
], ClientUpdateOneRequiredWithoutSalesNestedInput.prototype, "update", void 0);
exports.ClientUpdateOneRequiredWithoutSalesNestedInput = ClientUpdateOneRequiredWithoutSalesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateOneRequiredWithoutSalesNestedInput", {})
], ClientUpdateOneRequiredWithoutSalesNestedInput);
