"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithoutOrderItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutOrderItemsInput_1 = require("../inputs/ProductCreateWithoutOrderItemsInput");
const ProductUpdateWithoutOrderItemsInput_1 = require("../inputs/ProductUpdateWithoutOrderItemsInput");
const ProductWhereInput_1 = require("../inputs/ProductWhereInput");
let ProductUpsertWithoutOrderItemsInput = class ProductUpsertWithoutOrderItemsInput {
};
exports.ProductUpsertWithoutOrderItemsInput = ProductUpsertWithoutOrderItemsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutOrderItemsInput_1.ProductUpdateWithoutOrderItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutOrderItemsInput_1.ProductUpdateWithoutOrderItemsInput)
], ProductUpsertWithoutOrderItemsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrderItemsInput_1.ProductCreateWithoutOrderItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrderItemsInput_1.ProductCreateWithoutOrderItemsInput)
], ProductUpsertWithoutOrderItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductUpsertWithoutOrderItemsInput.prototype, "where", void 0);
exports.ProductUpsertWithoutOrderItemsInput = ProductUpsertWithoutOrderItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithoutOrderItemsInput", {})
], ProductUpsertWithoutOrderItemsInput);
