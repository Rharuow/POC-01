"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sale = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCount_1 = require("../resolvers/outputs/SaleCount");
let Sale = class Sale {
};
exports.Sale = Sale;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Sale.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Sale.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Sale.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Sale.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Sale.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Sale.prototype, "clientId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCount_1.SaleCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleCount_1.SaleCount)
], Sale.prototype, "_count", void 0);
exports.Sale = Sale = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Sale", {})
], Sale);
