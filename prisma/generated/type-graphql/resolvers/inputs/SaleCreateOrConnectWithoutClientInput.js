"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleCreateOrConnectWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCreateWithoutClientInput_1 = require("../inputs/SaleCreateWithoutClientInput");
const SaleWhereUniqueInput_1 = require("../inputs/SaleWhereUniqueInput");
let SaleCreateOrConnectWithoutClientInput = class SaleCreateOrConnectWithoutClientInput {
};
exports.SaleCreateOrConnectWithoutClientInput = SaleCreateOrConnectWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereUniqueInput_1.SaleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleWhereUniqueInput_1.SaleWhereUniqueInput)
], SaleCreateOrConnectWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateWithoutClientInput_1.SaleCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleCreateWithoutClientInput_1.SaleCreateWithoutClientInput)
], SaleCreateOrConnectWithoutClientInput.prototype, "create", void 0);
exports.SaleCreateOrConnectWithoutClientInput = SaleCreateOrConnectWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleCreateOrConnectWithoutClientInput", {})
], SaleCreateOrConnectWithoutClientInput);
