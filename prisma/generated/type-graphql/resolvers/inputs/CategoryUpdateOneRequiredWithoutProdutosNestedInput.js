"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateOneRequiredWithoutProdutosNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutProdutosInput_1 = require("../inputs/CategoryCreateOrConnectWithoutProdutosInput");
const CategoryCreateWithoutProdutosInput_1 = require("../inputs/CategoryCreateWithoutProdutosInput");
const CategoryUpdateToOneWithWhereWithoutProdutosInput_1 = require("../inputs/CategoryUpdateToOneWithWhereWithoutProdutosInput");
const CategoryUpsertWithoutProdutosInput_1 = require("../inputs/CategoryUpsertWithoutProdutosInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpdateOneRequiredWithoutProdutosNestedInput = class CategoryUpdateOneRequiredWithoutProdutosNestedInput {
};
exports.CategoryUpdateOneRequiredWithoutProdutosNestedInput = CategoryUpdateOneRequiredWithoutProdutosNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutProdutosInput_1.CategoryCreateWithoutProdutosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutProdutosInput_1.CategoryCreateWithoutProdutosInput)
], CategoryUpdateOneRequiredWithoutProdutosNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutProdutosInput_1.CategoryCreateOrConnectWithoutProdutosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateOrConnectWithoutProdutosInput_1.CategoryCreateOrConnectWithoutProdutosInput)
], CategoryUpdateOneRequiredWithoutProdutosNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpsertWithoutProdutosInput_1.CategoryUpsertWithoutProdutosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpsertWithoutProdutosInput_1.CategoryUpsertWithoutProdutosInput)
], CategoryUpdateOneRequiredWithoutProdutosNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryUpdateOneRequiredWithoutProdutosNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateToOneWithWhereWithoutProdutosInput_1.CategoryUpdateToOneWithWhereWithoutProdutosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateToOneWithWhereWithoutProdutosInput_1.CategoryUpdateToOneWithWhereWithoutProdutosInput)
], CategoryUpdateOneRequiredWithoutProdutosNestedInput.prototype, "update", void 0);
exports.CategoryUpdateOneRequiredWithoutProdutosNestedInput = CategoryUpdateOneRequiredWithoutProdutosNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateOneRequiredWithoutProdutosNestedInput", {})
], CategoryUpdateOneRequiredWithoutProdutosNestedInput);
