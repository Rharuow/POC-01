"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDocumentOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentWhereUniqueInput_1 = require("../../../inputs/DocumentWhereUniqueInput");
let FindUniqueDocumentOrThrowArgs = class FindUniqueDocumentOrThrowArgs {
};
exports.FindUniqueDocumentOrThrowArgs = FindUniqueDocumentOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], FindUniqueDocumentOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueDocumentOrThrowArgs = FindUniqueDocumentOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueDocumentOrThrowArgs);
