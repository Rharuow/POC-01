"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressOrderByWithRelationInput_1 = require("../../../inputs/AddressOrderByWithRelationInput");
const AddressWhereInput_1 = require("../../../inputs/AddressWhereInput");
const AddressWhereUniqueInput_1 = require("../../../inputs/AddressWhereUniqueInput");
const AddressScalarFieldEnum_1 = require("../../../../enums/AddressScalarFieldEnum");
let FindManyAddressArgs = class FindManyAddressArgs {
};
exports.FindManyAddressArgs = FindManyAddressArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], FindManyAddressArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressOrderByWithRelationInput_1.AddressOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAddressArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], FindManyAddressArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAddressArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAddressArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressScalarFieldEnum_1.AddressScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAddressArgs.prototype, "distinct", void 0);
exports.FindManyAddressArgs = FindManyAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyAddressArgs);
