"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneOrderItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemCreateInput_1 = require("../../../inputs/OrderItemCreateInput");
const OrderItemUpdateInput_1 = require("../../../inputs/OrderItemUpdateInput");
const OrderItemWhereUniqueInput_1 = require("../../../inputs/OrderItemWhereUniqueInput");
let UpsertOneOrderItemArgs = class UpsertOneOrderItemArgs {
};
exports.UpsertOneOrderItemArgs = UpsertOneOrderItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput)
], UpsertOneOrderItemArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateInput_1.OrderItemCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemCreateInput_1.OrderItemCreateInput)
], UpsertOneOrderItemArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemUpdateInput_1.OrderItemUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemUpdateInput_1.OrderItemUpdateInput)
], UpsertOneOrderItemArgs.prototype, "update", void 0);
exports.UpsertOneOrderItemArgs = UpsertOneOrderItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneOrderItemArgs);
