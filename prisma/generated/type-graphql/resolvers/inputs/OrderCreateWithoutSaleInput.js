"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutSaleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedOneWithoutOrdersInput_1 = require("../inputs/ProductCreateNestedOneWithoutOrdersInput");
let OrderCreateWithoutSaleInput = class OrderCreateWithoutSaleInput {
};
exports.OrderCreateWithoutSaleInput = OrderCreateWithoutSaleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutSaleInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutSaleInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutSaleInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutSaleInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateWithoutSaleInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateWithoutSaleInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOrdersInput_1.ProductCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedOneWithoutOrdersInput_1.ProductCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutSaleInput.prototype, "product", void 0);
exports.OrderCreateWithoutSaleInput = OrderCreateWithoutSaleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutSaleInput", {})
], OrderCreateWithoutSaleInput);
