"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientOrderByWithRelationInput_1 = require("../../../inputs/ClientOrderByWithRelationInput");
const ClientWhereInput_1 = require("../../../inputs/ClientWhereInput");
const ClientWhereUniqueInput_1 = require("../../../inputs/ClientWhereUniqueInput");
const ClientScalarFieldEnum_1 = require("../../../../enums/ClientScalarFieldEnum");
let FindFirstClientArgs = class FindFirstClientArgs {
};
exports.FindFirstClientArgs = FindFirstClientArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], FindFirstClientArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientOrderByWithRelationInput_1.ClientOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstClientArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], FindFirstClientArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstClientArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstClientArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientScalarFieldEnum_1.ClientScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstClientArgs.prototype, "distinct", void 0);
exports.FindFirstClientArgs = FindFirstClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstClientArgs);
