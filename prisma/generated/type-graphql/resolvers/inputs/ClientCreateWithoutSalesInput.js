"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateWithoutSalesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedOneWithoutClientInput_1 = require("../inputs/AddressCreateNestedOneWithoutClientInput");
const DocumentCreateNestedOneWithoutClientInput_1 = require("../inputs/DocumentCreateNestedOneWithoutClientInput");
let ClientCreateWithoutSalesInput = class ClientCreateWithoutSalesInput {
};
exports.ClientCreateWithoutSalesInput = ClientCreateWithoutSalesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutSalesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutSalesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutSalesInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutSalesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutSalesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutSalesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateNestedOneWithoutClientInput_1.DocumentCreateNestedOneWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateNestedOneWithoutClientInput_1.DocumentCreateNestedOneWithoutClientInput)
], ClientCreateWithoutSalesInput.prototype, "document", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutClientInput_1.AddressCreateNestedOneWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedOneWithoutClientInput_1.AddressCreateNestedOneWithoutClientInput)
], ClientCreateWithoutSalesInput.prototype, "address", void 0);
exports.ClientCreateWithoutSalesInput = ClientCreateWithoutSalesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateWithoutSalesInput", {})
], ClientCreateWithoutSalesInput);
