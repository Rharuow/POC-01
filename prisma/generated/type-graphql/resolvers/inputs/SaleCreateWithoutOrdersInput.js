"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleCreateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateNestedOneWithoutSalesInput_1 = require("../inputs/ClientCreateNestedOneWithoutSalesInput");
let SaleCreateWithoutOrdersInput = class SaleCreateWithoutOrdersInput {
};
exports.SaleCreateWithoutOrdersInput = SaleCreateWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleCreateWithoutOrdersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SaleCreateWithoutOrdersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SaleCreateWithoutOrdersInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SaleCreateWithoutOrdersInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SaleCreateWithoutOrdersInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutSalesInput_1.ClientCreateNestedOneWithoutSalesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateNestedOneWithoutSalesInput_1.ClientCreateNestedOneWithoutSalesInput)
], SaleCreateWithoutOrdersInput.prototype, "client", void 0);
exports.SaleCreateWithoutOrdersInput = SaleCreateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleCreateWithoutOrdersInput", {})
], SaleCreateWithoutOrdersInput);
