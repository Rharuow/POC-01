"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSaleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCreateInput_1 = require("../../../inputs/SaleCreateInput");
let CreateOneSaleArgs = class CreateOneSaleArgs {
};
exports.CreateOneSaleArgs = CreateOneSaleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateInput_1.SaleCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleCreateInput_1.SaleCreateInput)
], CreateOneSaleArgs.prototype, "data", void 0);
exports.CreateOneSaleArgs = CreateOneSaleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSaleArgs);
