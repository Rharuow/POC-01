"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateOneRequiredWithoutOrderItemsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutOrderItemsInput_1 = require("../inputs/ProductCreateOrConnectWithoutOrderItemsInput");
const ProductCreateWithoutOrderItemsInput_1 = require("../inputs/ProductCreateWithoutOrderItemsInput");
const ProductUpdateToOneWithWhereWithoutOrderItemsInput_1 = require("../inputs/ProductUpdateToOneWithWhereWithoutOrderItemsInput");
const ProductUpsertWithoutOrderItemsInput_1 = require("../inputs/ProductUpsertWithoutOrderItemsInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateOneRequiredWithoutOrderItemsNestedInput = class ProductUpdateOneRequiredWithoutOrderItemsNestedInput {
};
exports.ProductUpdateOneRequiredWithoutOrderItemsNestedInput = ProductUpdateOneRequiredWithoutOrderItemsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrderItemsInput_1.ProductCreateWithoutOrderItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrderItemsInput_1.ProductCreateWithoutOrderItemsInput)
], ProductUpdateOneRequiredWithoutOrderItemsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOrderItemsInput_1.ProductCreateOrConnectWithoutOrderItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateOrConnectWithoutOrderItemsInput_1.ProductCreateOrConnectWithoutOrderItemsInput)
], ProductUpdateOneRequiredWithoutOrderItemsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpsertWithoutOrderItemsInput_1.ProductUpsertWithoutOrderItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpsertWithoutOrderItemsInput_1.ProductUpsertWithoutOrderItemsInput)
], ProductUpdateOneRequiredWithoutOrderItemsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateOneRequiredWithoutOrderItemsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutOrderItemsInput_1.ProductUpdateToOneWithWhereWithoutOrderItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateToOneWithWhereWithoutOrderItemsInput_1.ProductUpdateToOneWithWhereWithoutOrderItemsInput)
], ProductUpdateOneRequiredWithoutOrderItemsNestedInput.prototype, "update", void 0);
exports.ProductUpdateOneRequiredWithoutOrderItemsNestedInput = ProductUpdateOneRequiredWithoutOrderItemsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutOrderItemsNestedInput", {})
], ProductUpdateOneRequiredWithoutOrderItemsNestedInput);
