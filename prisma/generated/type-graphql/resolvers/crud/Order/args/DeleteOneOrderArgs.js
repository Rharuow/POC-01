"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderWhereUniqueInput_1 = require("../../../inputs/OrderWhereUniqueInput");
let DeleteOneOrderArgs = class DeleteOneOrderArgs {
};
exports.DeleteOneOrderArgs = DeleteOneOrderArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], DeleteOneOrderArgs.prototype, "where", void 0);
exports.DeleteOneOrderArgs = DeleteOneOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneOrderArgs);
