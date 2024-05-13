"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCountSalesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleWhereInput_1 = require("../../inputs/SaleWhereInput");
let ClientCountSalesArgs = class ClientCountSalesArgs {
};
exports.ClientCountSalesArgs = ClientCountSalesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereInput_1.SaleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereInput_1.SaleWhereInput)
], ClientCountSalesArgs.prototype, "where", void 0);
exports.ClientCountSalesArgs = ClientCountSalesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ClientCountSalesArgs);
