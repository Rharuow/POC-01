"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCreateOrConnectWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateWithoutClientInput_1 = require("../inputs/DocumentCreateWithoutClientInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentCreateOrConnectWithoutClientInput = class DocumentCreateOrConnectWithoutClientInput {
};
exports.DocumentCreateOrConnectWithoutClientInput = DocumentCreateOrConnectWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], DocumentCreateOrConnectWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateWithoutClientInput_1.DocumentCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateWithoutClientInput_1.DocumentCreateWithoutClientInput)
], DocumentCreateOrConnectWithoutClientInput.prototype, "create", void 0);
exports.DocumentCreateOrConnectWithoutClientInput = DocumentCreateOrConnectWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentCreateOrConnectWithoutClientInput", {})
], DocumentCreateOrConnectWithoutClientInput);
