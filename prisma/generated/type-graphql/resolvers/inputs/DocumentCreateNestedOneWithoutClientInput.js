"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCreateNestedOneWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateOrConnectWithoutClientInput_1 = require("../inputs/DocumentCreateOrConnectWithoutClientInput");
const DocumentCreateWithoutClientInput_1 = require("../inputs/DocumentCreateWithoutClientInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentCreateNestedOneWithoutClientInput = class DocumentCreateNestedOneWithoutClientInput {
};
exports.DocumentCreateNestedOneWithoutClientInput = DocumentCreateNestedOneWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateWithoutClientInput_1.DocumentCreateWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateWithoutClientInput_1.DocumentCreateWithoutClientInput)
], DocumentCreateNestedOneWithoutClientInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateOrConnectWithoutClientInput_1.DocumentCreateOrConnectWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateOrConnectWithoutClientInput_1.DocumentCreateOrConnectWithoutClientInput)
], DocumentCreateNestedOneWithoutClientInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], DocumentCreateNestedOneWithoutClientInput.prototype, "connect", void 0);
exports.DocumentCreateNestedOneWithoutClientInput = DocumentCreateNestedOneWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentCreateNestedOneWithoutClientInput", {})
], DocumentCreateNestedOneWithoutClientInput);
