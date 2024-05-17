"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCategoriesProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesProductsCreateManyInput_1 = require("../../../inputs/CategoriesProductsCreateManyInput");
let CreateManyCategoriesProductsArgs = class CreateManyCategoriesProductsArgs {
};
exports.CreateManyCategoriesProductsArgs = CreateManyCategoriesProductsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesProductsCreateManyInput_1.CategoriesProductsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCategoriesProductsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCategoriesProductsArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyCategoriesProductsArgs = CreateManyCategoriesProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCategoriesProductsArgs);
