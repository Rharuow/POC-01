"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutOrdersInput_1 = require("../inputs/ProductCreateWithoutOrdersInput");
const ProductUpdateWithoutOrdersInput_1 = require("../inputs/ProductUpdateWithoutOrdersInput");
const ProductWhereInput_1 = require("../inputs/ProductWhereInput");
let ProductUpsertWithoutOrdersInput = class ProductUpsertWithoutOrdersInput {
};
exports.ProductUpsertWithoutOrdersInput = ProductUpsertWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutOrdersInput_1.ProductUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutOrdersInput_1.ProductUpdateWithoutOrdersInput)
], ProductUpsertWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrdersInput_1.ProductCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrdersInput_1.ProductCreateWithoutOrdersInput)
], ProductUpsertWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductUpsertWithoutOrdersInput.prototype, "where", void 0);
exports.ProductUpsertWithoutOrdersInput = ProductUpsertWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithoutOrdersInput", {})
], ProductUpsertWithoutOrdersInput);
