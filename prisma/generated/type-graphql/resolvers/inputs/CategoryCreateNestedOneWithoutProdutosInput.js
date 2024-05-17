"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateNestedOneWithoutProdutosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutProdutosInput_1 = require("../inputs/CategoryCreateOrConnectWithoutProdutosInput");
const CategoryCreateWithoutProdutosInput_1 = require("../inputs/CategoryCreateWithoutProdutosInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryCreateNestedOneWithoutProdutosInput = class CategoryCreateNestedOneWithoutProdutosInput {
};
exports.CategoryCreateNestedOneWithoutProdutosInput = CategoryCreateNestedOneWithoutProdutosInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutProdutosInput_1.CategoryCreateWithoutProdutosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutProdutosInput_1.CategoryCreateWithoutProdutosInput)
], CategoryCreateNestedOneWithoutProdutosInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutProdutosInput_1.CategoryCreateOrConnectWithoutProdutosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateOrConnectWithoutProdutosInput_1.CategoryCreateOrConnectWithoutProdutosInput)
], CategoryCreateNestedOneWithoutProdutosInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryCreateNestedOneWithoutProdutosInput.prototype, "connect", void 0);
exports.CategoryCreateNestedOneWithoutProdutosInput = CategoryCreateNestedOneWithoutProdutosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateNestedOneWithoutProdutosInput", {})
], CategoryCreateNestedOneWithoutProdutosInput);
