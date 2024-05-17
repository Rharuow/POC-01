"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateNestedManyWithoutProductInput_1 = require("../inputs/CategoriesProductsCreateNestedManyWithoutProductInput");
let ProductCreateWithoutOrdersInput = class ProductCreateWithoutOrdersInput {
};
exports.ProductCreateWithoutOrdersInput = ProductCreateWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutOrdersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutOrdersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutOrdersInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutOrdersInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutOrdersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutOrdersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutOrdersInput.prototype, "inventory_quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCreateNestedManyWithoutProductInput_1.CategoriesProductsCreateNestedManyWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCreateNestedManyWithoutProductInput_1.CategoriesProductsCreateNestedManyWithoutProductInput)
], ProductCreateWithoutOrdersInput.prototype, "categories", void 0);
exports.ProductCreateWithoutOrdersInput = ProductCreateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutOrdersInput", {})
], ProductCreateWithoutOrdersInput);
