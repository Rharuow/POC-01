"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressWhereInput_1 = require("../inputs/AddressWhereInput");
let AddressNullableRelationFilter = class AddressNullableRelationFilter {
};
exports.AddressNullableRelationFilter = AddressNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressNullableRelationFilter.prototype, "isNot", void 0);
exports.AddressNullableRelationFilter = AddressNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressNullableRelationFilter", {})
], AddressNullableRelationFilter);
