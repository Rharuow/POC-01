"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSaleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleWhereUniqueInput_1 = require("../../../inputs/SaleWhereUniqueInput");
let FindUniqueSaleArgs = class FindUniqueSaleArgs {
};
exports.FindUniqueSaleArgs = FindUniqueSaleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereUniqueInput_1.SaleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleWhereUniqueInput_1.SaleWhereUniqueInput)
], FindUniqueSaleArgs.prototype, "where", void 0);
exports.FindUniqueSaleArgs = FindUniqueSaleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSaleArgs);
