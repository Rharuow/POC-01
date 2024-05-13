"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpsertWithWhereUniqueWithoutProdutosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateWithoutProdutosInput_1 = require("../inputs/CategoryCreateWithoutProdutosInput");
const CategoryUpdateWithoutProdutosInput_1 = require("../inputs/CategoryUpdateWithoutProdutosInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpsertWithWhereUniqueWithoutProdutosInput = class CategoryUpsertWithWhereUniqueWithoutProdutosInput {
};
exports.CategoryUpsertWithWhereUniqueWithoutProdutosInput = CategoryUpsertWithWhereUniqueWithoutProdutosInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryUpsertWithWhereUniqueWithoutProdutosInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutProdutosInput_1.CategoryUpdateWithoutProdutosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutProdutosInput_1.CategoryUpdateWithoutProdutosInput)
], CategoryUpsertWithWhereUniqueWithoutProdutosInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutProdutosInput_1.CategoryCreateWithoutProdutosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutProdutosInput_1.CategoryCreateWithoutProdutosInput)
], CategoryUpsertWithWhereUniqueWithoutProdutosInput.prototype, "create", void 0);
exports.CategoryUpsertWithWhereUniqueWithoutProdutosInput = CategoryUpsertWithWhereUniqueWithoutProdutosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpsertWithWhereUniqueWithoutProdutosInput", {})
], CategoryUpsertWithWhereUniqueWithoutProdutosInput);
