"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateOrConnectWithoutProdutosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateWithoutProdutosInput_1 = require("../inputs/CategoryCreateWithoutProdutosInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryCreateOrConnectWithoutProdutosInput = class CategoryCreateOrConnectWithoutProdutosInput {
};
exports.CategoryCreateOrConnectWithoutProdutosInput = CategoryCreateOrConnectWithoutProdutosInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryCreateOrConnectWithoutProdutosInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutProdutosInput_1.CategoryCreateWithoutProdutosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutProdutosInput_1.CategoryCreateWithoutProdutosInput)
], CategoryCreateOrConnectWithoutProdutosInput.prototype, "create", void 0);
exports.CategoryCreateOrConnectWithoutProdutosInput = CategoryCreateOrConnectWithoutProdutosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateOrConnectWithoutProdutosInput", {})
], CategoryCreateOrConnectWithoutProdutosInput);
