"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SaleAvgAggregate = class SaleAvgAggregate {
};
exports.SaleAvgAggregate = SaleAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SaleAvgAggregate.prototype, "totalPrice", void 0);
exports.SaleAvgAggregate = SaleAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SaleAvgAggregate", {})
], SaleAvgAggregate);
