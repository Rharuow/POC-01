"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemWhereInput_1 = require("../inputs/OrderItemWhereInput");
let OrderItemListRelationFilter = class OrderItemListRelationFilter {
};
exports.OrderItemListRelationFilter = OrderItemListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereInput_1.OrderItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemWhereInput_1.OrderItemWhereInput)
], OrderItemListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereInput_1.OrderItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemWhereInput_1.OrderItemWhereInput)
], OrderItemListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereInput_1.OrderItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemWhereInput_1.OrderItemWhereInput)
], OrderItemListRelationFilter.prototype, "none", void 0);
exports.OrderItemListRelationFilter = OrderItemListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemListRelationFilter", {})
], OrderItemListRelationFilter);
