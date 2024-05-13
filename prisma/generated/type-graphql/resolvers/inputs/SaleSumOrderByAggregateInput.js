"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SaleSumOrderByAggregateInput = class SaleSumOrderByAggregateInput {
};
exports.SaleSumOrderByAggregateInput = SaleSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SaleSumOrderByAggregateInput.prototype, "totalPrice", void 0);
exports.SaleSumOrderByAggregateInput = SaleSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleSumOrderByAggregateInput", {})
], SaleSumOrderByAggregateInput);
