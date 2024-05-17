"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCategoriesProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateInput_1 = require("../../../inputs/CategoriesProductsCreateInput");
let CreateOneCategoriesProductsArgs = class CreateOneCategoriesProductsArgs {
};
exports.CreateOneCategoriesProductsArgs = CreateOneCategoriesProductsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCreateInput_1.CategoriesProductsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCreateInput_1.CategoriesProductsCreateInput)
], CreateOneCategoriesProductsArgs.prototype, "data", void 0);
exports.CreateOneCategoriesProductsArgs = CreateOneCategoriesProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCategoriesProductsArgs);
