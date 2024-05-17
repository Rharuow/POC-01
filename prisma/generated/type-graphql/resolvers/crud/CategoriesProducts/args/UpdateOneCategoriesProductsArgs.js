"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCategoriesProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsUpdateInput_1 = require("../../../inputs/CategoriesProductsUpdateInput");
const CategoriesProductsWhereUniqueInput_1 = require("../../../inputs/CategoriesProductsWhereUniqueInput");
let UpdateOneCategoriesProductsArgs = class UpdateOneCategoriesProductsArgs {
};
exports.UpdateOneCategoriesProductsArgs = UpdateOneCategoriesProductsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsUpdateInput_1.CategoriesProductsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsUpdateInput_1.CategoriesProductsUpdateInput)
], UpdateOneCategoriesProductsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput)
], UpdateOneCategoriesProductsArgs.prototype, "where", void 0);
exports.UpdateOneCategoriesProductsArgs = UpdateOneCategoriesProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCategoriesProductsArgs);
