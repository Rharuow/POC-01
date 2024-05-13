"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSaleOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleWhereUniqueInput_1 = require("../../../inputs/SaleWhereUniqueInput");
let FindUniqueSaleOrThrowArgs = class FindUniqueSaleOrThrowArgs {
};
exports.FindUniqueSaleOrThrowArgs = FindUniqueSaleOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereUniqueInput_1.SaleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleWhereUniqueInput_1.SaleWhereUniqueInput)
], FindUniqueSaleOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueSaleOrThrowArgs = FindUniqueSaleOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSaleOrThrowArgs);
