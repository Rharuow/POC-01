"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySaleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleUpdateManyMutationInput_1 = require("../../../inputs/SaleUpdateManyMutationInput");
const SaleWhereInput_1 = require("../../../inputs/SaleWhereInput");
let UpdateManySaleArgs = class UpdateManySaleArgs {
};
exports.UpdateManySaleArgs = UpdateManySaleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleUpdateManyMutationInput_1.SaleUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleUpdateManyMutationInput_1.SaleUpdateManyMutationInput)
], UpdateManySaleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereInput_1.SaleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereInput_1.SaleWhereInput)
], UpdateManySaleArgs.prototype, "where", void 0);
exports.UpdateManySaleArgs = UpdateManySaleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySaleArgs);
