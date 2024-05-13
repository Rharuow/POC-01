"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleUpdateToOneWithWhereWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleUpdateWithoutOrdersInput_1 = require("../inputs/SaleUpdateWithoutOrdersInput");
const SaleWhereInput_1 = require("../inputs/SaleWhereInput");
let SaleUpdateToOneWithWhereWithoutOrdersInput = class SaleUpdateToOneWithWhereWithoutOrdersInput {
};
exports.SaleUpdateToOneWithWhereWithoutOrdersInput = SaleUpdateToOneWithWhereWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereInput_1.SaleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereInput_1.SaleWhereInput)
], SaleUpdateToOneWithWhereWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleUpdateWithoutOrdersInput_1.SaleUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleUpdateWithoutOrdersInput_1.SaleUpdateWithoutOrdersInput)
], SaleUpdateToOneWithWhereWithoutOrdersInput.prototype, "data", void 0);
exports.SaleUpdateToOneWithWhereWithoutOrdersInput = SaleUpdateToOneWithWhereWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleUpdateToOneWithWhereWithoutOrdersInput", {})
], SaleUpdateToOneWithWhereWithoutOrdersInput);
