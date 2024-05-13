"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSaleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleUpdateInput_1 = require("../../../inputs/SaleUpdateInput");
const SaleWhereUniqueInput_1 = require("../../../inputs/SaleWhereUniqueInput");
let UpdateOneSaleArgs = class UpdateOneSaleArgs {
};
exports.UpdateOneSaleArgs = UpdateOneSaleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleUpdateInput_1.SaleUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleUpdateInput_1.SaleUpdateInput)
], UpdateOneSaleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereUniqueInput_1.SaleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleWhereUniqueInput_1.SaleWhereUniqueInput)
], UpdateOneSaleArgs.prototype, "where", void 0);
exports.UpdateOneSaleArgs = UpdateOneSaleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSaleArgs);
