"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUpdateInput_1 = require("../../../inputs/ClientUpdateInput");
const ClientWhereUniqueInput_1 = require("../../../inputs/ClientWhereUniqueInput");
let UpdateOneClientArgs = class UpdateOneClientArgs {
};
exports.UpdateOneClientArgs = UpdateOneClientArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateInput_1.ClientUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUpdateInput_1.ClientUpdateInput)
], UpdateOneClientArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], UpdateOneClientArgs.prototype, "where", void 0);
exports.UpdateOneClientArgs = UpdateOneClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneClientArgs);
