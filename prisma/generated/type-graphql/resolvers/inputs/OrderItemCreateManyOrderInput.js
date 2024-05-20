"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemCreateManyOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderItemCreateManyOrderInput = class OrderItemCreateManyOrderInput {
};
exports.OrderItemCreateManyOrderInput = OrderItemCreateManyOrderInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemCreateManyOrderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateManyOrderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateManyOrderInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderItemCreateManyOrderInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemCreateManyOrderInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderItemCreateManyOrderInput.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderItemCreateManyOrderInput.prototype, "productId", void 0);
exports.OrderItemCreateManyOrderInput = OrderItemCreateManyOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemCreateManyOrderInput", {})
], OrderItemCreateManyOrderInput);
