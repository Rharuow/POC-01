"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressOrderByWithAggregationInput_1 = require("../../../inputs/AddressOrderByWithAggregationInput");
const AddressScalarWhereWithAggregatesInput_1 = require("../../../inputs/AddressScalarWhereWithAggregatesInput");
const AddressWhereInput_1 = require("../../../inputs/AddressWhereInput");
const AddressScalarFieldEnum_1 = require("../../../../enums/AddressScalarFieldEnum");
let GroupByAddressArgs = class GroupByAddressArgs {
};
exports.GroupByAddressArgs = GroupByAddressArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], GroupByAddressArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressOrderByWithAggregationInput_1.AddressOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAddressArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressScalarFieldEnum_1.AddressScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAddressArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressScalarWhereWithAggregatesInput_1.AddressScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressScalarWhereWithAggregatesInput_1.AddressScalarWhereWithAggregatesInput)
], GroupByAddressArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAddressArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAddressArgs.prototype, "skip", void 0);
exports.GroupByAddressArgs = GroupByAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAddressArgs);
