"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateNestedManyWithoutProductInput_1 = require("../inputs/CategoriesProductsCreateNestedManyWithoutProductInput");
const OrderCreateNestedManyWithoutProductInput_1 = require("../inputs/OrderCreateNestedManyWithoutProductInput");
let ProductCreateInput = class ProductCreateInput {
};
exports.ProductCreateInput = ProductCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateInput.prototype, "inventory_quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCreateNestedManyWithoutProductInput_1.CategoriesProductsCreateNestedManyWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCreateNestedManyWithoutProductInput_1.CategoriesProductsCreateNestedManyWithoutProductInput)
], ProductCreateInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutProductInput_1.OrderCreateNestedManyWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutProductInput_1.OrderCreateNestedManyWithoutProductInput)
], ProductCreateInput.prototype, "orders", void 0);
exports.ProductCreateInput = ProductCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateInput", {})
], ProductCreateInput);
