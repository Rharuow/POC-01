"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpdateToOneWithWhereWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentUpdateWithoutClientInput_1 = require("../inputs/DocumentUpdateWithoutClientInput");
const DocumentWhereInput_1 = require("../inputs/DocumentWhereInput");
let DocumentUpdateToOneWithWhereWithoutClientInput = class DocumentUpdateToOneWithWhereWithoutClientInput {
};
exports.DocumentUpdateToOneWithWhereWithoutClientInput = DocumentUpdateToOneWithWhereWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereInput_1.DocumentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentWhereInput_1.DocumentWhereInput)
], DocumentUpdateToOneWithWhereWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateWithoutClientInput_1.DocumentUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentUpdateWithoutClientInput_1.DocumentUpdateWithoutClientInput)
], DocumentUpdateToOneWithWhereWithoutClientInput.prototype, "data", void 0);
exports.DocumentUpdateToOneWithWhereWithoutClientInput = DocumentUpdateToOneWithWhereWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentUpdateToOneWithWhereWithoutClientInput", {})
], DocumentUpdateToOneWithWhereWithoutClientInput);
