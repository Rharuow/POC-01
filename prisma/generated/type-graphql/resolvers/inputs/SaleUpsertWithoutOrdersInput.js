"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleUpsertWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCreateWithoutOrdersInput_1 = require("../inputs/SaleCreateWithoutOrdersInput");
const SaleUpdateWithoutOrdersInput_1 = require("../inputs/SaleUpdateWithoutOrdersInput");
const SaleWhereInput_1 = require("../inputs/SaleWhereInput");
let SaleUpsertWithoutOrdersInput = class SaleUpsertWithoutOrdersInput {
};
exports.SaleUpsertWithoutOrdersInput = SaleUpsertWithoutOrdersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleUpdateWithoutOrdersInput_1.SaleUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleUpdateWithoutOrdersInput_1.SaleUpdateWithoutOrdersInput)
], SaleUpsertWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateWithoutOrdersInput_1.SaleCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SaleCreateWithoutOrdersInput_1.SaleCreateWithoutOrdersInput)
], SaleUpsertWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereInput_1.SaleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereInput_1.SaleWhereInput)
], SaleUpsertWithoutOrdersInput.prototype, "where", void 0);
exports.SaleUpsertWithoutOrdersInput = SaleUpsertWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleUpsertWithoutOrdersInput", {})
], SaleUpsertWithoutOrdersInput);
