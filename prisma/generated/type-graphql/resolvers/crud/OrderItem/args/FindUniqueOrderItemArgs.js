"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOrderItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemWhereUniqueInput_1 = require("../../../inputs/OrderItemWhereUniqueInput");
let FindUniqueOrderItemArgs = class FindUniqueOrderItemArgs {
};
exports.FindUniqueOrderItemArgs = FindUniqueOrderItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput)
], FindUniqueOrderItemArgs.prototype, "where", void 0);
exports.FindUniqueOrderItemArgs = FindUniqueOrderItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueOrderItemArgs);
