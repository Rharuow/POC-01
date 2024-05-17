"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCategoriesProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateInput_1 = require("../../../inputs/CategoriesProductsCreateInput");
const CategoriesProductsUpdateInput_1 = require("../../../inputs/CategoriesProductsUpdateInput");
const CategoriesProductsWhereUniqueInput_1 = require("../../../inputs/CategoriesProductsWhereUniqueInput");
let UpsertOneCategoriesProductsArgs = class UpsertOneCategoriesProductsArgs {
};
exports.UpsertOneCategoriesProductsArgs = UpsertOneCategoriesProductsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsWhereUniqueInput_1.CategoriesProductsWhereUniqueInput)
], UpsertOneCategoriesProductsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsCreateInput_1.CategoriesProductsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsCreateInput_1.CategoriesProductsCreateInput)
], UpsertOneCategoriesProductsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesProductsUpdateInput_1.CategoriesProductsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesProductsUpdateInput_1.CategoriesProductsUpdateInput)
], UpsertOneCategoriesProductsArgs.prototype, "update", void 0);
exports.UpsertOneCategoriesProductsArgs = UpsertOneCategoriesProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCategoriesProductsArgs);
