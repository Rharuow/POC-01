"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientNullableRelationFilter = class ClientNullableRelationFilter {
};
exports.ClientNullableRelationFilter = ClientNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientNullableRelationFilter.prototype, "isNot", void 0);
exports.ClientNullableRelationFilter = ClientNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientNullableRelationFilter", {})
], ClientNullableRelationFilter);
