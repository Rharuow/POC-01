"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedOneWithoutClientInput_1 = require("../inputs/AddressCreateNestedOneWithoutClientInput");
const DocumentCreateNestedOneWithoutClientInput_1 = require("../inputs/DocumentCreateNestedOneWithoutClientInput");
let ClientCreateWithoutOrdersInput = class ClientCreateWithoutOrdersInput {
};
exports.ClientCreateWithoutOrdersInput = ClientCreateWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutOrdersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutOrdersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutOrdersInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutOrdersInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutOrdersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutOrdersInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutOrdersInput.prototype, "documentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutOrdersInput.prototype, "addressId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateNestedOneWithoutClientInput_1.DocumentCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateNestedOneWithoutClientInput_1.DocumentCreateNestedOneWithoutClientInput)
], ClientCreateWithoutOrdersInput.prototype, "document", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutClientInput_1.AddressCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedOneWithoutClientInput_1.AddressCreateNestedOneWithoutClientInput)
], ClientCreateWithoutOrdersInput.prototype, "address", void 0);
exports.ClientCreateWithoutOrdersInput = ClientCreateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateWithoutOrdersInput", {})
], ClientCreateWithoutOrdersInput);
