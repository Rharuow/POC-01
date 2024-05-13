"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateOneRequiredWithoutOrdersNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutOrdersInput_1 = require("../inputs/ProductCreateOrConnectWithoutOrdersInput");
const ProductCreateWithoutOrdersInput_1 = require("../inputs/ProductCreateWithoutOrdersInput");
const ProductUpdateToOneWithWhereWithoutOrdersInput_1 = require("../inputs/ProductUpdateToOneWithWhereWithoutOrdersInput");
const ProductUpsertWithoutOrdersInput_1 = require("../inputs/ProductUpsertWithoutOrdersInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateOneRequiredWithoutOrdersNestedInput = class ProductUpdateOneRequiredWithoutOrdersNestedInput {
};
exports.ProductUpdateOneRequiredWithoutOrdersNestedInput = ProductUpdateOneRequiredWithoutOrdersNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrdersInput_1.ProductCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrdersInput_1.ProductCreateWithoutOrdersInput)
], ProductUpdateOneRequiredWithoutOrdersNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOrdersInput_1.ProductCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateOrConnectWithoutOrdersInput_1.ProductCreateOrConnectWithoutOrdersInput)
], ProductUpdateOneRequiredWithoutOrdersNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpsertWithoutOrdersInput_1.ProductUpsertWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpsertWithoutOrdersInput_1.ProductUpsertWithoutOrdersInput)
], ProductUpdateOneRequiredWithoutOrdersNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateOneRequiredWithoutOrdersNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutOrdersInput_1.ProductUpdateToOneWithWhereWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateToOneWithWhereWithoutOrdersInput_1.ProductUpdateToOneWithWhereWithoutOrdersInput)
], ProductUpdateOneRequiredWithoutOrdersNestedInput.prototype, "update", void 0);
exports.ProductUpdateOneRequiredWithoutOrdersNestedInput = ProductUpdateOneRequiredWithoutOrdersNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutOrdersNestedInput", {})
], ProductUpdateOneRequiredWithoutOrdersNestedInput);
