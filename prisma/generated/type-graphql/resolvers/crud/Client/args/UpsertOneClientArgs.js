"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateInput_1 = require("../../../inputs/ClientCreateInput");
const ClientUpdateInput_1 = require("../../../inputs/ClientUpdateInput");
const ClientWhereUniqueInput_1 = require("../../../inputs/ClientWhereUniqueInput");
let UpsertOneClientArgs = class UpsertOneClientArgs {
};
exports.UpsertOneClientArgs = UpsertOneClientArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], UpsertOneClientArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateInput_1.ClientCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateInput_1.ClientCreateInput)
], UpsertOneClientArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateInput_1.ClientUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUpdateInput_1.ClientUpdateInput)
], UpsertOneClientArgs.prototype, "update", void 0);
exports.UpsertOneClientArgs = UpsertOneClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneClientArgs);
