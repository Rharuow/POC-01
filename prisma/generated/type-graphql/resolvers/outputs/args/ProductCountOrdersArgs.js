"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCountOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderWhereInput_1 = require("../../inputs/OrderWhereInput");
let ProductCountOrdersArgs = class ProductCountOrdersArgs {
};
exports.ProductCountOrdersArgs = ProductCountOrdersArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereInput_1.OrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereInput_1.OrderWhereInput)
], ProductCountOrdersArgs.prototype, "where", void 0);
exports.ProductCountOrdersArgs = ProductCountOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProductCountOrdersArgs);
