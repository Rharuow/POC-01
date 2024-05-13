"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpsertWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateWithoutClientInput_1 = require("../inputs/DocumentCreateWithoutClientInput");
const DocumentUpdateWithoutClientInput_1 = require("../inputs/DocumentUpdateWithoutClientInput");
const DocumentWhereInput_1 = require("../inputs/DocumentWhereInput");
let DocumentUpsertWithoutClientInput = class DocumentUpsertWithoutClientInput {
};
exports.DocumentUpsertWithoutClientInput = DocumentUpsertWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateWithoutClientInput_1.DocumentUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentUpdateWithoutClientInput_1.DocumentUpdateWithoutClientInput)
], DocumentUpsertWithoutClientInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateWithoutClientInput_1.DocumentCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateWithoutClientInput_1.DocumentCreateWithoutClientInput)
], DocumentUpsertWithoutClientInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereInput_1.DocumentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentWhereInput_1.DocumentWhereInput)
], DocumentUpsertWithoutClientInput.prototype, "where", void 0);
exports.DocumentUpsertWithoutClientInput = DocumentUpsertWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentUpsertWithoutClientInput", {})
], DocumentUpsertWithoutClientInput);
