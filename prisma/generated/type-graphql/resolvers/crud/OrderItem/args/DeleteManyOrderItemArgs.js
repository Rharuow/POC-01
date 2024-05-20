"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyOrderItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemWhereInput_1 = require("../../../inputs/OrderItemWhereInput");
let DeleteManyOrderItemArgs = class DeleteManyOrderItemArgs {
};
exports.DeleteManyOrderItemArgs = DeleteManyOrderItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereInput_1.OrderItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemWhereInput_1.OrderItemWhereInput)
], DeleteManyOrderItemArgs.prototype, "where", void 0);
exports.DeleteManyOrderItemArgs = DeleteManyOrderItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyOrderItemArgs);
