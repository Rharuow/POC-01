"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateNestedOneWithoutSalesInput_1 = require("../inputs/ClientCreateNestedOneWithoutSalesInput");
const OrderCreateNestedManyWithoutSaleInput_1 = require("../inputs/OrderCreateNestedManyWithoutSaleInput");
let SaleCreateInput = class SaleCreateInput {
};
exports.SaleCreateInput = SaleCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SaleCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SaleCreateInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SaleCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SaleCreateInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutSaleInput_1.OrderCreateNestedManyWithoutSaleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutSaleInput_1.OrderCreateNestedManyWithoutSaleInput)
], SaleCreateInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutSalesInput_1.ClientCreateNestedOneWithoutSalesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateNestedOneWithoutSalesInput_1.ClientCreateNestedOneWithoutSalesInput)
], SaleCreateInput.prototype, "client", void 0);
exports.SaleCreateInput = SaleCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleCreateInput", {})
], SaleCreateInput);
