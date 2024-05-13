"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpsertWithoutSalesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateWithoutSalesInput_1 = require("../inputs/ClientCreateWithoutSalesInput");
const ClientUpdateWithoutSalesInput_1 = require("../inputs/ClientUpdateWithoutSalesInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpsertWithoutSalesInput = class ClientUpsertWithoutSalesInput {
};
exports.ClientUpsertWithoutSalesInput = ClientUpsertWithoutSalesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateWithoutSalesInput_1.ClientUpdateWithoutSalesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUpdateWithoutSalesInput_1.ClientUpdateWithoutSalesInput)
], ClientUpsertWithoutSalesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateWithoutSalesInput_1.ClientCreateWithoutSalesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateWithoutSalesInput_1.ClientCreateWithoutSalesInput)
], ClientUpsertWithoutSalesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpsertWithoutSalesInput.prototype, "where", void 0);
exports.ClientUpsertWithoutSalesInput = ClientUpsertWithoutSalesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpsertWithoutSalesInput", {})
], ClientUpsertWithoutSalesInput);
