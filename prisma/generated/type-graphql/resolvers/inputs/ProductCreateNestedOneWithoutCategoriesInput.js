"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedOneWithoutCategoriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutCategoriesInput_1 = require("../inputs/ProductCreateOrConnectWithoutCategoriesInput");
const ProductCreateWithoutCategoriesInput_1 = require("../inputs/ProductCreateWithoutCategoriesInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedOneWithoutCategoriesInput = class ProductCreateNestedOneWithoutCategoriesInput {
};
exports.ProductCreateNestedOneWithoutCategoriesInput = ProductCreateNestedOneWithoutCategoriesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutCategoriesInput_1.ProductCreateWithoutCategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutCategoriesInput_1.ProductCreateWithoutCategoriesInput)
], ProductCreateNestedOneWithoutCategoriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutCategoriesInput_1.ProductCreateOrConnectWithoutCategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateOrConnectWithoutCategoriesInput_1.ProductCreateOrConnectWithoutCategoriesInput)
], ProductCreateNestedOneWithoutCategoriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateNestedOneWithoutCategoriesInput.prototype, "connect", void 0);
exports.ProductCreateNestedOneWithoutCategoriesInput = ProductCreateNestedOneWithoutCategoriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedOneWithoutCategoriesInput", {})
], ProductCreateNestedOneWithoutCategoriesInput);
