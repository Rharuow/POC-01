"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientWhereInput_1 = require("../../../inputs/ClientWhereInput");
let DocumentClientArgs = class DocumentClientArgs {
};
exports.DocumentClientArgs = DocumentClientArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], DocumentClientArgs.prototype, "where", void 0);
exports.DocumentClientArgs = DocumentClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DocumentClientArgs);
