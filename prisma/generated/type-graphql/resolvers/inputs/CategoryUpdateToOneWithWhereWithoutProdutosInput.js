"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateToOneWithWhereWithoutProdutosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateWithoutProdutosInput_1 = require("../inputs/CategoryUpdateWithoutProdutosInput");
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
let CategoryUpdateToOneWithWhereWithoutProdutosInput = class CategoryUpdateToOneWithWhereWithoutProdutosInput {
};
exports.CategoryUpdateToOneWithWhereWithoutProdutosInput = CategoryUpdateToOneWithWhereWithoutProdutosInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryUpdateToOneWithWhereWithoutProdutosInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutProdutosInput_1.CategoryUpdateWithoutProdutosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutProdutosInput_1.CategoryUpdateWithoutProdutosInput)
], CategoryUpdateToOneWithWhereWithoutProdutosInput.prototype, "data", void 0);
exports.CategoryUpdateToOneWithWhereWithoutProdutosInput = CategoryUpdateToOneWithWhereWithoutProdutosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateToOneWithWhereWithoutProdutosInput", {})
], CategoryUpdateToOneWithWhereWithoutProdutosInput);
