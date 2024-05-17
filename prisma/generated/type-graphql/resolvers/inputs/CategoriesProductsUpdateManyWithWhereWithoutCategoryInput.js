"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesProductsUpdateManyWithWhereWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsScalarWhereInput_1 = require("../inputs/CategoriesProductsScalarWhereInput");
const CategoriesProductsUpdateManyMutationInput_1 = require("../inputs/CategoriesProductsUpdateManyMutationInput");
let CategoriesProductsUpdateManyWithWhereWithoutCategoryInput = class CategoriesProductsUpdateManyWithWhereWithoutCategoryInput {
};
exports.CategoriesProductsUpdateManyWithWhereWithoutCategoryInput = CategoriesProductsUpdateManyWithWhereWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsScalarWhereInput_1.CategoriesProductsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsScalarWhereInput_1.CategoriesProductsScalarWhereInput)
], CategoriesProductsUpdateManyWithWhereWithoutCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsUpdateManyMutationInput_1.CategoriesProductsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsUpdateManyMutationInput_1.CategoriesProductsUpdateManyMutationInput)
], CategoriesProductsUpdateManyWithWhereWithoutCategoryInput.prototype, "data", void 0);
exports.CategoriesProductsUpdateManyWithWhereWithoutCategoryInput = CategoriesProductsUpdateManyWithWhereWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesProductsUpdateManyWithWhereWithoutCategoryInput", {})
], CategoriesProductsUpdateManyWithWhereWithoutCategoryInput);
