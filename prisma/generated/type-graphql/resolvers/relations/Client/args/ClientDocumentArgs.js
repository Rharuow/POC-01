"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientDocumentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentWhereInput_1 = require("../../../inputs/DocumentWhereInput");
let ClientDocumentArgs = class ClientDocumentArgs {
};
exports.ClientDocumentArgs = ClientDocumentArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereInput_1.DocumentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentWhereInput_1.DocumentWhereInput)
], ClientDocumentArgs.prototype, "where", void 0);
exports.ClientDocumentArgs = ClientDocumentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ClientDocumentArgs);
