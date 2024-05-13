"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOrderOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderWhereUniqueInput_1 = require("../../../inputs/OrderWhereUniqueInput");
let FindUniqueOrderOrThrowArgs = class FindUniqueOrderOrThrowArgs {
};
exports.FindUniqueOrderOrThrowArgs = FindUniqueOrderOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], FindUniqueOrderOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueOrderOrThrowArgs = FindUniqueOrderOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueOrderOrThrowArgs);
