"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleCreateNestedOneWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCreateOrConnectWithoutOrdersInput_1 = require("../inputs/SaleCreateOrConnectWithoutOrdersInput");
const SaleCreateWithoutOrdersInput_1 = require("../inputs/SaleCreateWithoutOrdersInput");
const SaleWhereUniqueInput_1 = require("../inputs/SaleWhereUniqueInput");
let SaleCreateNestedOneWithoutOrdersInput = class SaleCreateNestedOneWithoutOrdersInput {
};
exports.SaleCreateNestedOneWithoutOrdersInput = SaleCreateNestedOneWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateWithoutOrdersInput_1.SaleCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleCreateWithoutOrdersInput_1.SaleCreateWithoutOrdersInput)
], SaleCreateNestedOneWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateOrConnectWithoutOrdersInput_1.SaleCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleCreateOrConnectWithoutOrdersInput_1.SaleCreateOrConnectWithoutOrdersInput)
], SaleCreateNestedOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereUniqueInput_1.SaleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereUniqueInput_1.SaleWhereUniqueInput)
], SaleCreateNestedOneWithoutOrdersInput.prototype, "connect", void 0);
exports.SaleCreateNestedOneWithoutOrdersInput = SaleCreateNestedOneWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleCreateNestedOneWithoutOrdersInput", {})
], SaleCreateNestedOneWithoutOrdersInput);
