"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientOrderByWithRelationInput_1 = require("../inputs/ClientOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DocumentOrderByWithRelationInput = class DocumentOrderByWithRelationInput {
};
exports.DocumentOrderByWithRelationInput = DocumentOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], DocumentOrderByWithRelationInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], DocumentOrderByWithRelationInput.prototype, "cpf", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], DocumentOrderByWithRelationInput.prototype, "cnpj", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], DocumentOrderByWithRelationInput.prototype, "clientId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientOrderByWithRelationInput_1.ClientOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientOrderByWithRelationInput_1.ClientOrderByWithRelationInput)
], DocumentOrderByWithRelationInput.prototype, "client", void 0);
exports.DocumentOrderByWithRelationInput = DocumentOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentOrderByWithRelationInput", {})
], DocumentOrderByWithRelationInput);
