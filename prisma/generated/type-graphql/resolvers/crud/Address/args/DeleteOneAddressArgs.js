"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressWhereUniqueInput_1 = require("../../../inputs/AddressWhereUniqueInput");
let DeleteOneAddressArgs = class DeleteOneAddressArgs {
};
exports.DeleteOneAddressArgs = DeleteOneAddressArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], DeleteOneAddressArgs.prototype, "where", void 0);
exports.DeleteOneAddressArgs = DeleteOneAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneAddressArgs);
