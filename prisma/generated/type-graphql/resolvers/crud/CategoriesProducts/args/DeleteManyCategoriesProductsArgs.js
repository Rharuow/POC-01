"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCategoriesProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsWhereInput_1 = require("../../../inputs/CategoriesProductsWhereInput");
let DeleteManyCategoriesProductsArgs = class DeleteManyCategoriesProductsArgs {
};
exports.DeleteManyCategoriesProductsArgs = DeleteManyCategoriesProductsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereInput_1.CategoriesProductsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereInput_1.CategoriesProductsWhereInput)
], DeleteManyCategoriesProductsArgs.prototype, "where", void 0);
exports.DeleteManyCategoriesProductsArgs = DeleteManyCategoriesProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCategoriesProductsArgs);
