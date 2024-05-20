"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateToOneWithWhereWithoutOrderItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutOrderItemsInput_1 = require("../inputs/ProductUpdateWithoutOrderItemsInput");
const ProductWhereInput_1 = require("../inputs/ProductWhereInput");
let ProductUpdateToOneWithWhereWithoutOrderItemsInput = class ProductUpdateToOneWithWhereWithoutOrderItemsInput {
};
exports.ProductUpdateToOneWithWhereWithoutOrderItemsInput = ProductUpdateToOneWithWhereWithoutOrderItemsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductUpdateToOneWithWhereWithoutOrderItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutOrderItemsInput_1.ProductUpdateWithoutOrderItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutOrderItemsInput_1.ProductUpdateWithoutOrderItemsInput)
], ProductUpdateToOneWithWhereWithoutOrderItemsInput.prototype, "data", void 0);
exports.ProductUpdateToOneWithWhereWithoutOrderItemsInput = ProductUpdateToOneWithWhereWithoutOrderItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutOrderItemsInput", {})
], ProductUpdateToOneWithWhereWithoutOrderItemsInput);
