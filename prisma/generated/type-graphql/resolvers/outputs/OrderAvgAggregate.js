"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderAvgAggregate = class OrderAvgAggregate {
};
exports.OrderAvgAggregate = OrderAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderAvgAggregate.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderAvgAggregate.prototype, "totalPrice", void 0);
exports.OrderAvgAggregate = OrderAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderAvgAggregate", {})
], OrderAvgAggregate);
