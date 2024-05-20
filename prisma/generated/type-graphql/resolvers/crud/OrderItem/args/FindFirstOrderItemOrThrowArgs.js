"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstOrderItemOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemOrderByWithRelationInput_1 = require("../../../inputs/OrderItemOrderByWithRelationInput");
const OrderItemWhereInput_1 = require("../../../inputs/OrderItemWhereInput");
const OrderItemWhereUniqueInput_1 = require("../../../inputs/OrderItemWhereUniqueInput");
const OrderItemScalarFieldEnum_1 = require("../../../../enums/OrderItemScalarFieldEnum");
let FindFirstOrderItemOrThrowArgs = class FindFirstOrderItemOrThrowArgs {
};
exports.FindFirstOrderItemOrThrowArgs = FindFirstOrderItemOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereInput_1.OrderItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemWhereInput_1.OrderItemWhereInput)
], FindFirstOrderItemOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemOrderByWithRelationInput_1.OrderItemOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstOrderItemOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput)
], FindFirstOrderItemOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstOrderItemOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstOrderItemOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemScalarFieldEnum_1.OrderItemScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstOrderItemOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstOrderItemOrThrowArgs = FindFirstOrderItemOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstOrderItemOrThrowArgs);
