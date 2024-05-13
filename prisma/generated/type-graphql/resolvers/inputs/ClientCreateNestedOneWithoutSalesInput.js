"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateNestedOneWithoutSalesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutSalesInput_1 = require("../inputs/ClientCreateOrConnectWithoutSalesInput");
const ClientCreateWithoutSalesInput_1 = require("../inputs/ClientCreateWithoutSalesInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateNestedOneWithoutSalesInput = class ClientCreateNestedOneWithoutSalesInput {
};
exports.ClientCreateNestedOneWithoutSalesInput = ClientCreateNestedOneWithoutSalesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutSalesInput_1.ClientCreateWithoutSalesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutSalesInput_1.ClientCreateWithoutSalesInput)
], ClientCreateNestedOneWithoutSalesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutSalesInput_1.ClientCreateOrConnectWithoutSalesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutSalesInput_1.ClientCreateOrConnectWithoutSalesInput)
], ClientCreateNestedOneWithoutSalesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateNestedOneWithoutSalesInput.prototype, "connect", void 0);
exports.ClientCreateNestedOneWithoutSalesInput = ClientCreateNestedOneWithoutSalesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateNestedOneWithoutSalesInput", {})
], ClientCreateNestedOneWithoutSalesInput);
