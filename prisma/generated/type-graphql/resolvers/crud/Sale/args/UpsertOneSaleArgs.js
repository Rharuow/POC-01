"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSaleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCreateInput_1 = require("../../../inputs/SaleCreateInput");
const SaleUpdateInput_1 = require("../../../inputs/SaleUpdateInput");
const SaleWhereUniqueInput_1 = require("../../../inputs/SaleWhereUniqueInput");
let UpsertOneSaleArgs = class UpsertOneSaleArgs {
};
exports.UpsertOneSaleArgs = UpsertOneSaleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereUniqueInput_1.SaleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleWhereUniqueInput_1.SaleWhereUniqueInput)
], UpsertOneSaleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateInput_1.SaleCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleCreateInput_1.SaleCreateInput)
], UpsertOneSaleArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleUpdateInput_1.SaleUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleUpdateInput_1.SaleUpdateInput)
], UpsertOneSaleArgs.prototype, "update", void 0);
exports.UpsertOneSaleArgs = UpsertOneSaleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSaleArgs);
