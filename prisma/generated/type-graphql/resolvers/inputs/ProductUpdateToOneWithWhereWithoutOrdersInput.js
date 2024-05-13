"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateToOneWithWhereWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutOrdersInput_1 = require("../inputs/ProductUpdateWithoutOrdersInput");
const ProductWhereInput_1 = require("../inputs/ProductWhereInput");
let ProductUpdateToOneWithWhereWithoutOrdersInput = class ProductUpdateToOneWithWhereWithoutOrdersInput {
};
exports.ProductUpdateToOneWithWhereWithoutOrdersInput = ProductUpdateToOneWithWhereWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductUpdateToOneWithWhereWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutOrdersInput_1.ProductUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutOrdersInput_1.ProductUpdateWithoutOrdersInput)
], ProductUpdateToOneWithWhereWithoutOrdersInput.prototype, "data", void 0);
exports.ProductUpdateToOneWithWhereWithoutOrdersInput = ProductUpdateToOneWithWhereWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutOrdersInput", {})
], ProductUpdateToOneWithWhereWithoutOrdersInput);
