"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueClientOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientWhereUniqueInput_1 = require("../../../inputs/ClientWhereUniqueInput");
let FindUniqueClientOrThrowArgs = class FindUniqueClientOrThrowArgs {
};
exports.FindUniqueClientOrThrowArgs = FindUniqueClientOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], FindUniqueClientOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueClientOrThrowArgs = FindUniqueClientOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueClientOrThrowArgs);
