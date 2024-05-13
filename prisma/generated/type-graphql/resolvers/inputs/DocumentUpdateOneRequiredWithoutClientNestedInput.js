"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpdateOneRequiredWithoutClientNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateOrConnectWithoutClientInput_1 = require("../inputs/DocumentCreateOrConnectWithoutClientInput");
const DocumentCreateWithoutClientInput_1 = require("../inputs/DocumentCreateWithoutClientInput");
const DocumentUpdateToOneWithWhereWithoutClientInput_1 = require("../inputs/DocumentUpdateToOneWithWhereWithoutClientInput");
const DocumentUpsertWithoutClientInput_1 = require("../inputs/DocumentUpsertWithoutClientInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentUpdateOneRequiredWithoutClientNestedInput = class DocumentUpdateOneRequiredWithoutClientNestedInput {
};
exports.DocumentUpdateOneRequiredWithoutClientNestedInput = DocumentUpdateOneRequiredWithoutClientNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateWithoutClientInput_1.DocumentCreateWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateWithoutClientInput_1.DocumentCreateWithoutClientInput)
], DocumentUpdateOneRequiredWithoutClientNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateOrConnectWithoutClientInput_1.DocumentCreateOrConnectWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateOrConnectWithoutClientInput_1.DocumentCreateOrConnectWithoutClientInput)
], DocumentUpdateOneRequiredWithoutClientNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpsertWithoutClientInput_1.DocumentUpsertWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentUpsertWithoutClientInput_1.DocumentUpsertWithoutClientInput)
], DocumentUpdateOneRequiredWithoutClientNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], DocumentUpdateOneRequiredWithoutClientNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateToOneWithWhereWithoutClientInput_1.DocumentUpdateToOneWithWhereWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentUpdateToOneWithWhereWithoutClientInput_1.DocumentUpdateToOneWithWhereWithoutClientInput)
], DocumentUpdateOneRequiredWithoutClientNestedInput.prototype, "update", void 0);
exports.DocumentUpdateOneRequiredWithoutClientNestedInput = DocumentUpdateOneRequiredWithoutClientNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentUpdateOneRequiredWithoutClientNestedInput", {})
], DocumentUpdateOneRequiredWithoutClientNestedInput);
