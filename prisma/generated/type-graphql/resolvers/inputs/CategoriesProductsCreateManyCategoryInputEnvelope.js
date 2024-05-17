"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsCreateManyCategoryInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateManyCategoryInput_1 = require("../inputs/CategoriesProductsCreateManyCategoryInput");
let CategoriesProductsCreateManyCategoryInputEnvelope = class CategoriesProductsCreateManyCategoryInputEnvelope {
};
exports.CategoriesProductsCreateManyCategoryInputEnvelope = CategoriesProductsCreateManyCategoryInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsCreateManyCategoryInput_1.CategoriesProductsCreateManyCategoryInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsCreateManyCategoryInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CategoriesProductsCreateManyCategoryInputEnvelope.prototype, "skipDuplicates", void 0);
exports.CategoriesProductsCreateManyCategoryInputEnvelope = CategoriesProductsCreateManyCategoryInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsCreateManyCategoryInputEnvelope", {})
], CategoriesProductsCreateManyCategoryInputEnvelope);
