"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateOrConnectWithoutSalesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateWithoutSalesInput_1 = require("../inputs/ClientCreateWithoutSalesInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateOrConnectWithoutSalesInput = class ClientCreateOrConnectWithoutSalesInput {
};
exports.ClientCreateOrConnectWithoutSalesInput = ClientCreateOrConnectWithoutSalesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateOrConnectWithoutSalesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutSalesInput_1.ClientCreateWithoutSalesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutSalesInput_1.ClientCreateWithoutSalesInput)
], ClientCreateOrConnectWithoutSalesInput.prototype, "create", void 0);
exports.ClientCreateOrConnectWithoutSalesInput = ClientCreateOrConnectWithoutSalesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateOrConnectWithoutSalesInput", {})
], ClientCreateOrConnectWithoutSalesInput);
