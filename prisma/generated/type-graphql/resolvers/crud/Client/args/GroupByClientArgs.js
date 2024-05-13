"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientOrderByWithAggregationInput_1 = require("../../../inputs/ClientOrderByWithAggregationInput");
const ClientScalarWhereWithAggregatesInput_1 = require("../../../inputs/ClientScalarWhereWithAggregatesInput");
const ClientWhereInput_1 = require("../../../inputs/ClientWhereInput");
const ClientScalarFieldEnum_1 = require("../../../../enums/ClientScalarFieldEnum");
let GroupByClientArgs = class GroupByClientArgs {
};
exports.GroupByClientArgs = GroupByClientArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], GroupByClientArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientOrderByWithAggregationInput_1.ClientOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByClientArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientScalarFieldEnum_1.ClientScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByClientArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientScalarWhereWithAggregatesInput_1.ClientScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientScalarWhereWithAggregatesInput_1.ClientScalarWhereWithAggregatesInput)
], GroupByClientArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByClientArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByClientArgs.prototype, "skip", void 0);
exports.GroupByClientArgs = GroupByClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByClientArgs);
