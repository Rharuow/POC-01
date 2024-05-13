"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateToOneWithWhereWithoutSalesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUpdateWithoutSalesInput_1 = require("../inputs/ClientUpdateWithoutSalesInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpdateToOneWithWhereWithoutSalesInput = class ClientUpdateToOneWithWhereWithoutSalesInput {
};
exports.ClientUpdateToOneWithWhereWithoutSalesInput = ClientUpdateToOneWithWhereWithoutSalesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateToOneWithWhereWithoutSalesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateWithoutSalesInput_1.ClientUpdateWithoutSalesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUpdateWithoutSalesInput_1.ClientUpdateWithoutSalesInput)
], ClientUpdateToOneWithWhereWithoutSalesInput.prototype, "data", void 0);
exports.ClientUpdateToOneWithWhereWithoutSalesInput = ClientUpdateToOneWithWhereWithoutSalesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateToOneWithWhereWithoutSalesInput", {})
], ClientUpdateToOneWithWhereWithoutSalesInput);
