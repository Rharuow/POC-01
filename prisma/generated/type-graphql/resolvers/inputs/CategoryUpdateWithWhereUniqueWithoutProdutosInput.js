"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateWithWhereUniqueWithoutProdutosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateWithoutProdutosInput_1 = require("../inputs/CategoryUpdateWithoutProdutosInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpdateWithWhereUniqueWithoutProdutosInput = class CategoryUpdateWithWhereUniqueWithoutProdutosInput {
};
exports.CategoryUpdateWithWhereUniqueWithoutProdutosInput = CategoryUpdateWithWhereUniqueWithoutProdutosInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryUpdateWithWhereUniqueWithoutProdutosInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutProdutosInput_1.CategoryUpdateWithoutProdutosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutProdutosInput_1.CategoryUpdateWithoutProdutosInput)
], CategoryUpdateWithWhereUniqueWithoutProdutosInput.prototype, "data", void 0);
exports.CategoryUpdateWithWhereUniqueWithoutProdutosInput = CategoryUpdateWithWhereUniqueWithoutProdutosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateWithWhereUniqueWithoutProdutosInput", {})
], CategoryUpdateWithWhereUniqueWithoutProdutosInput);
