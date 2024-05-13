"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateInput_1 = require("../../../inputs/AddressCreateInput");
const AddressUpdateInput_1 = require("../../../inputs/AddressUpdateInput");
const AddressWhereUniqueInput_1 = require("../../../inputs/AddressWhereUniqueInput");
let UpsertOneAddressArgs = class UpsertOneAddressArgs {
};
exports.UpsertOneAddressArgs = UpsertOneAddressArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], UpsertOneAddressArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateInput_1.AddressCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressCreateInput_1.AddressCreateInput)
], UpsertOneAddressArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateInput_1.AddressUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUpdateInput_1.AddressUpdateInput)
], UpsertOneAddressArgs.prototype, "update", void 0);
exports.UpsertOneAddressArgs = UpsertOneAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneAddressArgs);
