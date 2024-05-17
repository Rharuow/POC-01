"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsCreateManyProductInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateManyProductInput_1 = require("../inputs/CategoriesProductsCreateManyProductInput");
let CategoriesProductsCreateManyProductInputEnvelope = class CategoriesProductsCreateManyProductInputEnvelope {
};
exports.CategoriesProductsCreateManyProductInputEnvelope = CategoriesProductsCreateManyProductInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsCreateManyProductInput_1.CategoriesProductsCreateManyProductInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CategoriesProductsCreateManyProductInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CategoriesProductsCreateManyProductInputEnvelope.prototype, "skipDuplicates", void 0);
exports.CategoriesProductsCreateManyProductInputEnvelope = CategoriesProductsCreateManyProductInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsCreateManyProductInputEnvelope", {})
], CategoriesProductsCreateManyProductInputEnvelope);
