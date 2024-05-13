"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleCreateWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateNestedManyWithoutSaleInput_1 = require("../inputs/OrderCreateNestedManyWithoutSaleInput");
let SaleCreateWithoutClientInput = class SaleCreateWithoutClientInput {
};
exports.SaleCreateWithoutClientInput = SaleCreateWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleCreateWithoutClientInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SaleCreateWithoutClientInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SaleCreateWithoutClientInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SaleCreateWithoutClientInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SaleCreateWithoutClientInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutSaleInput_1.OrderCreateNestedManyWithoutSaleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutSaleInput_1.OrderCreateNestedManyWithoutSaleInput)
], SaleCreateWithoutClientInput.prototype, "orders", void 0);
exports.SaleCreateWithoutClientInput = SaleCreateWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleCreateWithoutClientInput", {})
], SaleCreateWithoutClientInput);
