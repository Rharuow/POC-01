"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientWhereUniqueInput_1 = require("../../../inputs/ClientWhereUniqueInput");
let DeleteOneClientArgs = class DeleteOneClientArgs {
};
exports.DeleteOneClientArgs = DeleteOneClientArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], DeleteOneClientArgs.prototype, "where", void 0);
exports.DeleteOneClientArgs = DeleteOneClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneClientArgs);
