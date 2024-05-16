"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressWhereInput_1 = require("../../../inputs/AddressWhereInput");
let ClientAddressArgs = class ClientAddressArgs {
};
exports.ClientAddressArgs = ClientAddressArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], ClientAddressArgs.prototype, "where", void 0);
exports.ClientAddressArgs = ClientAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ClientAddressArgs);
