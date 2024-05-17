"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateOneRequiredWithoutCategoriesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutCategoriesInput_1 = require("../inputs/ProductCreateOrConnectWithoutCategoriesInput");
const ProductCreateWithoutCategoriesInput_1 = require("../inputs/ProductCreateWithoutCategoriesInput");
const ProductUpdateToOneWithWhereWithoutCategoriesInput_1 = require("../inputs/ProductUpdateToOneWithWhereWithoutCategoriesInput");
const ProductUpsertWithoutCategoriesInput_1 = require("../inputs/ProductUpsertWithoutCategoriesInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateOneRequiredWithoutCategoriesNestedInput = class ProductUpdateOneRequiredWithoutCategoriesNestedInput {
};
exports.ProductUpdateOneRequiredWithoutCategoriesNestedInput = ProductUpdateOneRequiredWithoutCategoriesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutCategoriesInput_1.ProductCreateWithoutCategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutCategoriesInput_1.ProductCreateWithoutCategoriesInput)
], ProductUpdateOneRequiredWithoutCategoriesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutCategoriesInput_1.ProductCreateOrConnectWithoutCategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateOrConnectWithoutCategoriesInput_1.ProductCreateOrConnectWithoutCategoriesInput)
], ProductUpdateOneRequiredWithoutCategoriesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpsertWithoutCategoriesInput_1.ProductUpsertWithoutCategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpsertWithoutCategoriesInput_1.ProductUpsertWithoutCategoriesInput)
], ProductUpdateOneRequiredWithoutCategoriesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateOneRequiredWithoutCategoriesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutCategoriesInput_1.ProductUpdateToOneWithWhereWithoutCategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateToOneWithWhereWithoutCategoriesInput_1.ProductUpdateToOneWithWhereWithoutCategoriesInput)
], ProductUpdateOneRequiredWithoutCategoriesNestedInput.prototype, "update", void 0);
exports.ProductUpdateOneRequiredWithoutCategoriesNestedInput = ProductUpdateOneRequiredWithoutCategoriesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutCategoriesNestedInput", {})
], ProductUpdateOneRequiredWithoutCategoriesNestedInput);
