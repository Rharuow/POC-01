"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneOrderItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemUpdateInput_1 = require("../../../inputs/OrderItemUpdateInput");
const OrderItemWhereUniqueInput_1 = require("../../../inputs/OrderItemWhereUniqueInput");
let UpdateOneOrderItemArgs = class UpdateOneOrderItemArgs {
};
exports.UpdateOneOrderItemArgs = UpdateOneOrderItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemUpdateInput_1.OrderItemUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemUpdateInput_1.OrderItemUpdateInput)
], UpdateOneOrderItemArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput)
], UpdateOneOrderItemArgs.prototype, "where", void 0);
exports.UpdateOneOrderItemArgs = UpdateOneOrderItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneOrderItemArgs);
