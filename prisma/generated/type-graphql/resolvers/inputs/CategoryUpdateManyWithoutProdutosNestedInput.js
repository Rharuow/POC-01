"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateManyWithoutProdutosNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutProdutosInput_1 = require("../inputs/CategoryCreateOrConnectWithoutProdutosInput");
const CategoryCreateWithoutProdutosInput_1 = require("../inputs/CategoryCreateWithoutProdutosInput");
const CategoryScalarWhereInput_1 = require("../inputs/CategoryScalarWhereInput");
const CategoryUpdateManyWithWhereWithoutProdutosInput_1 = require("../inputs/CategoryUpdateManyWithWhereWithoutProdutosInput");
const CategoryUpdateWithWhereUniqueWithoutProdutosInput_1 = require("../inputs/CategoryUpdateWithWhereUniqueWithoutProdutosInput");
const CategoryUpsertWithWhereUniqueWithoutProdutosInput_1 = require("../inputs/CategoryUpsertWithWhereUniqueWithoutProdutosInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpdateManyWithoutProdutosNestedInput = class CategoryUpdateManyWithoutProdutosNestedInput {
};
exports.CategoryUpdateManyWithoutProdutosNestedInput = CategoryUpdateManyWithoutProdutosNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryCreateWithoutProdutosInput_1.CategoryCreateWithoutProdutosInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProdutosNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutProdutosInput_1.CategoryCreateOrConnectWithoutProdutosInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProdutosNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutProdutosInput_1.CategoryUpsertWithWhereUniqueWithoutProdutosInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProdutosNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProdutosNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProdutosNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProdutosNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProdutosNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutProdutosInput_1.CategoryUpdateWithWhereUniqueWithoutProdutosInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProdutosNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereWithoutProdutosInput_1.CategoryUpdateManyWithWhereWithoutProdutosInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProdutosNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryScalarWhereInput_1.CategoryScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutProdutosNestedInput.prototype, "deleteMany", void 0);
exports.CategoryUpdateManyWithoutProdutosNestedInput = CategoryUpdateManyWithoutProdutosNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateManyWithoutProdutosNestedInput", {})
], CategoryUpdateManyWithoutProdutosNestedInput);
