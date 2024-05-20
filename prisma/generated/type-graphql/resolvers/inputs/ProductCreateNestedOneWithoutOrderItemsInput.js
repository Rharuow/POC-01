"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedOneWithoutOrderItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutOrderItemsInput_1 = require("../inputs/ProductCreateOrConnectWithoutOrderItemsInput");
const ProductCreateWithoutOrderItemsInput_1 = require("../inputs/ProductCreateWithoutOrderItemsInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedOneWithoutOrderItemsInput = class ProductCreateNestedOneWithoutOrderItemsInput {
};
exports.ProductCreateNestedOneWithoutOrderItemsInput = ProductCreateNestedOneWithoutOrderItemsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrderItemsInput_1.ProductCreateWithoutOrderItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrderItemsInput_1.ProductCreateWithoutOrderItemsInput)
], ProductCreateNestedOneWithoutOrderItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOrderItemsInput_1.ProductCreateOrConnectWithoutOrderItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateOrConnectWithoutOrderItemsInput_1.ProductCreateOrConnectWithoutOrderItemsInput)
], ProductCreateNestedOneWithoutOrderItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateNestedOneWithoutOrderItemsInput.prototype, "connect", void 0);
exports.ProductCreateNestedOneWithoutOrderItemsInput = ProductCreateNestedOneWithoutOrderItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedOneWithoutOrderItemsInput", {})
], ProductCreateNestedOneWithoutOrderItemsInput);
