"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleCountOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderWhereInput_1 = require("../../inputs/OrderWhereInput");
let SaleCountOrdersArgs = class SaleCountOrdersArgs {
};
exports.SaleCountOrdersArgs = SaleCountOrdersArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereInput_1.OrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereInput_1.OrderWhereInput)
], SaleCountOrdersArgs.prototype, "where", void 0);
exports.SaleCountOrdersArgs = SaleCountOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], SaleCountOrdersArgs);
