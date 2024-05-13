"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentWhereInput_1 = require("../inputs/DocumentWhereInput");
let DocumentRelationFilter = class DocumentRelationFilter {
};
exports.DocumentRelationFilter = DocumentRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereInput_1.DocumentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentWhereInput_1.DocumentWhereInput)
], DocumentRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereInput_1.DocumentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentWhereInput_1.DocumentWhereInput)
], DocumentRelationFilter.prototype, "isNot", void 0);
exports.DocumentRelationFilter = DocumentRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentRelationFilter", {})
], DocumentRelationFilter);
