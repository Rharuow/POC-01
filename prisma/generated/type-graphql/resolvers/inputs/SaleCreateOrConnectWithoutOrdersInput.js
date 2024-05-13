"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleCreateOrConnectWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCreateWithoutOrdersInput_1 = require("../inputs/SaleCreateWithoutOrdersInput");
const SaleWhereUniqueInput_1 = require("../inputs/SaleWhereUniqueInput");
let SaleCreateOrConnectWithoutOrdersInput = class SaleCreateOrConnectWithoutOrdersInput {
};
exports.SaleCreateOrConnectWithoutOrdersInput = SaleCreateOrConnectWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereUniqueInput_1.SaleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleWhereUniqueInput_1.SaleWhereUniqueInput)
], SaleCreateOrConnectWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateWithoutOrdersInput_1.SaleCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleCreateWithoutOrdersInput_1.SaleCreateWithoutOrdersInput)
], SaleCreateOrConnectWithoutOrdersInput.prototype, "create", void 0);
exports.SaleCreateOrConnectWithoutOrdersInput = SaleCreateOrConnectWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleCreateOrConnectWithoutOrdersInput", {})
], SaleCreateOrConnectWithoutOrdersInput);
