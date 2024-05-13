"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientRelationFilter = class ClientRelationFilter {
};
exports.ClientRelationFilter = ClientRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientRelationFilter.prototype, "isNot", void 0);
exports.ClientRelationFilter = ClientRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientRelationFilter", {})
], ClientRelationFilter);
