"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedOneWithoutClientInput_1 = require("../inputs/AddressCreateNestedOneWithoutClientInput");
const DocumentCreateNestedOneWithoutClientInput_1 = require("../inputs/DocumentCreateNestedOneWithoutClientInput");
const SaleCreateNestedManyWithoutClientInput_1 = require("../inputs/SaleCreateNestedManyWithoutClientInput");
let ClientCreateInput = class ClientCreateInput {
};
exports.ClientCreateInput = ClientCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateInput.prototype, "documentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateInput.prototype, "addressId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateNestedOneWithoutClientInput_1.DocumentCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateNestedOneWithoutClientInput_1.DocumentCreateNestedOneWithoutClientInput)
], ClientCreateInput.prototype, "document", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutClientInput_1.AddressCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedOneWithoutClientInput_1.AddressCreateNestedOneWithoutClientInput)
], ClientCreateInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateNestedManyWithoutClientInput_1.SaleCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleCreateNestedManyWithoutClientInput_1.SaleCreateNestedManyWithoutClientInput)
], ClientCreateInput.prototype, "sales", void 0);
exports.ClientCreateInput = ClientCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateInput", {})
], ClientCreateInput);
