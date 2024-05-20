"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderItemsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemOrderByWithRelationInput_1 = require("../../../inputs/OrderItemOrderByWithRelationInput");
const OrderItemWhereInput_1 = require("../../../inputs/OrderItemWhereInput");
const OrderItemWhereUniqueInput_1 = require("../../../inputs/OrderItemWhereUniqueInput");
const OrderItemScalarFieldEnum_1 = require("../../../../enums/OrderItemScalarFieldEnum");
let ProductOrderItemsArgs = class ProductOrderItemsArgs {
};
exports.ProductOrderItemsArgs = ProductOrderItemsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereInput_1.OrderItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemWhereInput_1.OrderItemWhereInput)
], ProductOrderItemsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemOrderByWithRelationInput_1.OrderItemOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductOrderItemsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput)
], ProductOrderItemsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductOrderItemsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductOrderItemsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemScalarFieldEnum_1.OrderItemScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductOrderItemsArgs.prototype, "distinct", void 0);
exports.ProductOrderItemsArgs = ProductOrderItemsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProductOrderItemsArgs);
