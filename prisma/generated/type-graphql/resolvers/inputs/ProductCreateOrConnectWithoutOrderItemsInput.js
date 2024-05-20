"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutOrderItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutOrderItemsInput_1 = require("../inputs/ProductCreateWithoutOrderItemsInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutOrderItemsInput = class ProductCreateOrConnectWithoutOrderItemsInput {
};
exports.ProductCreateOrConnectWithoutOrderItemsInput = ProductCreateOrConnectWithoutOrderItemsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutOrderItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrderItemsInput_1.ProductCreateWithoutOrderItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrderItemsInput_1.ProductCreateWithoutOrderItemsInput)
], ProductCreateOrConnectWithoutOrderItemsInput.prototype, "create", void 0);
exports.ProductCreateOrConnectWithoutOrderItemsInput = ProductCreateOrConnectWithoutOrderItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutOrderItemsInput", {})
], ProductCreateOrConnectWithoutOrderItemsInput);
