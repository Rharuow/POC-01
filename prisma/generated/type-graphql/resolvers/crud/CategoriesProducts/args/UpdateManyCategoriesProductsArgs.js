"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCategoriesProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsUpdateManyMutationInput_1 = require("../../../inputs/CategoriesProductsUpdateManyMutationInput");
const CategoriesProductsWhereInput_1 = require("../../../inputs/CategoriesProductsWhereInput");
let UpdateManyCategoriesProductsArgs = class UpdateManyCategoriesProductsArgs {
};
exports.UpdateManyCategoriesProductsArgs = UpdateManyCategoriesProductsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsUpdateManyMutationInput_1.CategoriesProductsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsUpdateManyMutationInput_1.CategoriesProductsUpdateManyMutationInput)
], UpdateManyCategoriesProductsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereInput_1.CategoriesProductsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereInput_1.CategoriesProductsWhereInput)
], UpdateManyCategoriesProductsArgs.prototype, "where", void 0);
exports.UpdateManyCategoriesProductsArgs = UpdateManyCategoriesProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCategoriesProductsArgs);
