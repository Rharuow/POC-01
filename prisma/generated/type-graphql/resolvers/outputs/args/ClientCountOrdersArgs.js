"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCountOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderWhereInput_1 = require("../../inputs/OrderWhereInput");
let ClientCountOrdersArgs = class ClientCountOrdersArgs {
};
exports.ClientCountOrdersArgs = ClientCountOrdersArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereInput_1.OrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereInput_1.OrderWhereInput)
], ClientCountOrdersArgs.prototype, "where", void 0);
exports.ClientCountOrdersArgs = ClientCountOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ClientCountOrdersArgs);
