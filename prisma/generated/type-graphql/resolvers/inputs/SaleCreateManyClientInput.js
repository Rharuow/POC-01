"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleCreateManyClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SaleCreateManyClientInput = class SaleCreateManyClientInput {
};
exports.SaleCreateManyClientInput = SaleCreateManyClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleCreateManyClientInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SaleCreateManyClientInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SaleCreateManyClientInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SaleCreateManyClientInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SaleCreateManyClientInput.prototype, "totalPrice", void 0);
exports.SaleCreateManyClientInput = SaleCreateManyClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleCreateManyClientInput", {})
], SaleCreateManyClientInput);
