"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCategoriesProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsWhereUniqueInput_1 = require("../../../inputs/CategoriesProductsWhereUniqueInput");
let DeleteOneCategoriesProductsArgs = class DeleteOneCategoriesProductsArgs {
};
exports.DeleteOneCategoriesProductsArgs = DeleteOneCategoriesProductsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput)
], DeleteOneCategoriesProductsArgs.prototype, "where", void 0);
exports.DeleteOneCategoriesProductsArgs = DeleteOneCategoriesProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCategoriesProductsArgs);
