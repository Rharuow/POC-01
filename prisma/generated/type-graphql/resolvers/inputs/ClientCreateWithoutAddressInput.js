"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateNestedOneWithoutClientInput_1 = require("../inputs/DocumentCreateNestedOneWithoutClientInput");
let ClientCreateWithoutAddressInput = class ClientCreateWithoutAddressInput {
};
exports.ClientCreateWithoutAddressInput = ClientCreateWithoutAddressInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutAddressInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutAddressInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutAddressInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutAddressInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutAddressInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutAddressInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateNestedOneWithoutClientInput_1.DocumentCreateNestedOneWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateNestedOneWithoutClientInput_1.DocumentCreateNestedOneWithoutClientInput)
], ClientCreateWithoutAddressInput.prototype, "document", void 0);
exports.ClientCreateWithoutAddressInput = ClientCreateWithoutAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateWithoutAddressInput", {})
], ClientCreateWithoutAddressInput);
