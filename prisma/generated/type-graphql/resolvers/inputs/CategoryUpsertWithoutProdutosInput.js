"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpsertWithoutProdutosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateWithoutProdutosInput_1 = require("../inputs/CategoryCreateWithoutProdutosInput");
const CategoryUpdateWithoutProdutosInput_1 = require("../inputs/CategoryUpdateWithoutProdutosInput");
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
let CategoryUpsertWithoutProdutosInput = class CategoryUpsertWithoutProdutosInput {
};
exports.CategoryUpsertWithoutProdutosInput = CategoryUpsertWithoutProdutosInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutProdutosInput_1.CategoryUpdateWithoutProdutosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutProdutosInput_1.CategoryUpdateWithoutProdutosInput)
], CategoryUpsertWithoutProdutosInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutProdutosInput_1.CategoryCreateWithoutProdutosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutProdutosInput_1.CategoryCreateWithoutProdutosInput)
], CategoryUpsertWithoutProdutosInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryUpsertWithoutProdutosInput.prototype, "where", void 0);
exports.CategoryUpsertWithoutProdutosInput = CategoryUpsertWithoutProdutosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpsertWithoutProdutosInput", {})
], CategoryUpsertWithoutProdutosInput);
