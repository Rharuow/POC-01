"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAddressOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressWhereUniqueInput_1 = require("../../../inputs/AddressWhereUniqueInput");
let FindUniqueAddressOrThrowArgs = class FindUniqueAddressOrThrowArgs {
};
exports.FindUniqueAddressOrThrowArgs = FindUniqueAddressOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], FindUniqueAddressOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueAddressOrThrowArgs = FindUniqueAddressOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueAddressOrThrowArgs);
