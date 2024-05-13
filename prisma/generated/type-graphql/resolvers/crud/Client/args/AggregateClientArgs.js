"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientOrderByWithRelationInput_1 = require("../../../inputs/ClientOrderByWithRelationInput");
const ClientWhereInput_1 = require("../../../inputs/ClientWhereInput");
const ClientWhereUniqueInput_1 = require("../../../inputs/ClientWhereUniqueInput");
let AggregateClientArgs = class AggregateClientArgs {
};
exports.AggregateClientArgs = AggregateClientArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], AggregateClientArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientOrderByWithRelationInput_1.ClientOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateClientArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], AggregateClientArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateClientArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateClientArgs.prototype, "skip", void 0);
exports.AggregateClientArgs = AggregateClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateClientArgs);
