"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedOneWithoutOrdersInput_1 = require("../inputs/ProductCreateNestedOneWithoutOrdersInput");
const SaleCreateNestedOneWithoutOrdersInput_1 = require("../inputs/SaleCreateNestedOneWithoutOrdersInput");
let OrderCreateInput = class OrderCreateInput {
};
exports.OrderCreateInput = OrderCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOrdersInput_1.ProductCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedOneWithoutOrdersInput_1.ProductCreateNestedOneWithoutOrdersInput)
], OrderCreateInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateNestedOneWithoutOrdersInput_1.SaleCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleCreateNestedOneWithoutOrdersInput_1.SaleCreateNestedOneWithoutOrdersInput)
], OrderCreateInput.prototype, "sale", void 0);
exports.OrderCreateInput = OrderCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateInput", {})
], OrderCreateInput);
