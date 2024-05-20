"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneOrderItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemCreateInput_1 = require("../../../inputs/OrderItemCreateInput");
let CreateOneOrderItemArgs = class CreateOneOrderItemArgs {
};
exports.CreateOneOrderItemArgs = CreateOneOrderItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateInput_1.OrderItemCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderItemCreateInput_1.OrderItemCreateInput)
], CreateOneOrderItemArgs.prototype, "data", void 0);
exports.CreateOneOrderItemArgs = CreateOneOrderItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneOrderItemArgs);
