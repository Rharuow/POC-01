"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneOrderItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemWhereUniqueInput_1 = require("../../../inputs/OrderItemWhereUniqueInput");
let DeleteOneOrderItemArgs = class DeleteOneOrderItemArgs {
};
exports.DeleteOneOrderItemArgs = DeleteOneOrderItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput)
], DeleteOneOrderItemArgs.prototype, "where", void 0);
exports.DeleteOneOrderItemArgs = DeleteOneOrderItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneOrderItemArgs);
