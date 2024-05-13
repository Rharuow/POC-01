"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySaleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleWhereInput_1 = require("../../../inputs/SaleWhereInput");
let DeleteManySaleArgs = class DeleteManySaleArgs {
};
exports.DeleteManySaleArgs = DeleteManySaleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereInput_1.SaleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereInput_1.SaleWhereInput)
], DeleteManySaleArgs.prototype, "where", void 0);
exports.DeleteManySaleArgs = DeleteManySaleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySaleArgs);
