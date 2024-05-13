"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUpdateManyMutationInput_1 = require("../../../inputs/ClientUpdateManyMutationInput");
const ClientWhereInput_1 = require("../../../inputs/ClientWhereInput");
let UpdateManyClientArgs = class UpdateManyClientArgs {
};
exports.UpdateManyClientArgs = UpdateManyClientArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateManyMutationInput_1.ClientUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUpdateManyMutationInput_1.ClientUpdateManyMutationInput)
], UpdateManyClientArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], UpdateManyClientArgs.prototype, "where", void 0);
exports.UpdateManyClientArgs = UpdateManyClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyClientArgs);
