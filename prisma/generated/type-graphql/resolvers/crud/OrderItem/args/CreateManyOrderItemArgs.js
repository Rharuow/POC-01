"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyOrderItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemCreateManyInput_1 = require("../../../inputs/OrderItemCreateManyInput");
let CreateManyOrderItemArgs = class CreateManyOrderItemArgs {
};
exports.CreateManyOrderItemArgs = CreateManyOrderItemArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateManyInput_1.OrderItemCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyOrderItemArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyOrderItemArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyOrderItemArgs = CreateManyOrderItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyOrderItemArgs);
