"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyOrderItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemUpdateManyMutationInput_1 = require("../../../inputs/OrderItemUpdateManyMutationInput");
const OrderItemWhereInput_1 = require("../../../inputs/OrderItemWhereInput");
let UpdateManyOrderItemArgs = class UpdateManyOrderItemArgs {
};
exports.UpdateManyOrderItemArgs = UpdateManyOrderItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemUpdateManyMutationInput_1.OrderItemUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemUpdateManyMutationInput_1.OrderItemUpdateManyMutationInput)
], UpdateManyOrderItemArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereInput_1.OrderItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemWhereInput_1.OrderItemWhereInput)
], UpdateManyOrderItemArgs.prototype, "where", void 0);
exports.UpdateManyOrderItemArgs = UpdateManyOrderItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyOrderItemArgs);
