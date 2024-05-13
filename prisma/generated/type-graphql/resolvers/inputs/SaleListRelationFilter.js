"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleWhereInput_1 = require("../inputs/SaleWhereInput");
let SaleListRelationFilter = class SaleListRelationFilter {
};
exports.SaleListRelationFilter = SaleListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereInput_1.SaleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereInput_1.SaleWhereInput)
], SaleListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereInput_1.SaleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereInput_1.SaleWhereInput)
], SaleListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereInput_1.SaleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereInput_1.SaleWhereInput)
], SaleListRelationFilter.prototype, "none", void 0);
exports.SaleListRelationFilter = SaleListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleListRelationFilter", {})
], SaleListRelationFilter);
