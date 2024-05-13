"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSale = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleAvgAggregate_1 = require("../outputs/SaleAvgAggregate");
const SaleCountAggregate_1 = require("../outputs/SaleCountAggregate");
const SaleMaxAggregate_1 = require("../outputs/SaleMaxAggregate");
const SaleMinAggregate_1 = require("../outputs/SaleMinAggregate");
const SaleSumAggregate_1 = require("../outputs/SaleSumAggregate");
let AggregateSale = class AggregateSale {
};
exports.AggregateSale = AggregateSale;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCountAggregate_1.SaleCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleCountAggregate_1.SaleCountAggregate)
], AggregateSale.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleAvgAggregate_1.SaleAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleAvgAggregate_1.SaleAvgAggregate)
], AggregateSale.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleSumAggregate_1.SaleSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleSumAggregate_1.SaleSumAggregate)
], AggregateSale.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleMinAggregate_1.SaleMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleMinAggregate_1.SaleMinAggregate)
], AggregateSale.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleMaxAggregate_1.SaleMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleMaxAggregate_1.SaleMaxAggregate)
], AggregateSale.prototype, "_max", void 0);
exports.AggregateSale = AggregateSale = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSale", {})
], AggregateSale);
