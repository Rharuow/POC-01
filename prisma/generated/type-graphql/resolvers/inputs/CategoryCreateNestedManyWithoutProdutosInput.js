"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateNestedManyWithoutProdutosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutProdutosInput_1 = require("../inputs/CategoryCreateOrConnectWithoutProdutosInput");
const CategoryCreateWithoutProdutosInput_1 = require("../inputs/CategoryCreateWithoutProdutosInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryCreateNestedManyWithoutProdutosInput = class CategoryCreateNestedManyWithoutProdutosInput {
};
exports.CategoryCreateNestedManyWithoutProdutosInput = CategoryCreateNestedManyWithoutProdutosInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryCreateWithoutProdutosInput_1.CategoryCreateWithoutProdutosInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryCreateNestedManyWithoutProdutosInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutProdutosInput_1.CategoryCreateOrConnectWithoutProdutosInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryCreateNestedManyWithoutProdutosInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryCreateNestedManyWithoutProdutosInput.prototype, "connect", void 0);
exports.CategoryCreateNestedManyWithoutProdutosInput = CategoryCreateNestedManyWithoutProdutosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateNestedManyWithoutProdutosInput", {})
], CategoryCreateNestedManyWithoutProdutosInput);
