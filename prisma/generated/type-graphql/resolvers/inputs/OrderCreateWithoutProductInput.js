"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCreateNestedOneWithoutOrdersInput_1 = require("../inputs/SaleCreateNestedOneWithoutOrdersInput");
let OrderCreateWithoutProductInput = class OrderCreateWithoutProductInput {
};
exports.OrderCreateWithoutProductInput = OrderCreateWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutProductInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutProductInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutProductInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutProductInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateWithoutProductInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateWithoutProductInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateNestedOneWithoutOrdersInput_1.SaleCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleCreateNestedOneWithoutOrdersInput_1.SaleCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutProductInput.prototype, "sale", void 0);
exports.OrderCreateWithoutProductInput = OrderCreateWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutProductInput", {})
], OrderCreateWithoutProductInput);
