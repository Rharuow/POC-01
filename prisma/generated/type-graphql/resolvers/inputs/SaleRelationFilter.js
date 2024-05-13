"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleWhereInput_1 = require("../inputs/SaleWhereInput");
let SaleRelationFilter = class SaleRelationFilter {
};
exports.SaleRelationFilter = SaleRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereInput_1.SaleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereInput_1.SaleWhereInput)
], SaleRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereInput_1.SaleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereInput_1.SaleWhereInput)
], SaleRelationFilter.prototype, "isNot", void 0);
exports.SaleRelationFilter = SaleRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleRelationFilter", {})
], SaleRelationFilter);
