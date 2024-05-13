"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedOneWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutOrdersInput_1 = require("../inputs/ProductCreateOrConnectWithoutOrdersInput");
const ProductCreateWithoutOrdersInput_1 = require("../inputs/ProductCreateWithoutOrdersInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedOneWithoutOrdersInput = class ProductCreateNestedOneWithoutOrdersInput {
};
exports.ProductCreateNestedOneWithoutOrdersInput = ProductCreateNestedOneWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrdersInput_1.ProductCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrdersInput_1.ProductCreateWithoutOrdersInput)
], ProductCreateNestedOneWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOrdersInput_1.ProductCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateOrConnectWithoutOrdersInput_1.ProductCreateOrConnectWithoutOrdersInput)
], ProductCreateNestedOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateNestedOneWithoutOrdersInput.prototype, "connect", void 0);
exports.ProductCreateNestedOneWithoutOrdersInput = ProductCreateNestedOneWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedOneWithoutOrdersInput", {})
], ProductCreateNestedOneWithoutOrdersInput);
