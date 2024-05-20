"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutOrderItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateNestedManyWithoutProductInput_1 = require("../inputs/CategoriesProductsCreateNestedManyWithoutProductInput");
let ProductCreateWithoutOrderItemsInput = class ProductCreateWithoutOrderItemsInput {
};
exports.ProductCreateWithoutOrderItemsInput = ProductCreateWithoutOrderItemsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutOrderItemsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutOrderItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutOrderItemsInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutOrderItemsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutOrderItemsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutOrderItemsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutOrderItemsInput.prototype, "inventory_quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutOrderItemsInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCreateNestedManyWithoutProductInput_1.CategoriesProductsCreateNestedManyWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCreateNestedManyWithoutProductInput_1.CategoriesProductsCreateNestedManyWithoutProductInput)
], ProductCreateWithoutOrderItemsInput.prototype, "categories", void 0);
exports.ProductCreateWithoutOrderItemsInput = ProductCreateWithoutOrderItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutOrderItemsInput", {})
], ProductCreateWithoutOrderItemsInput);
