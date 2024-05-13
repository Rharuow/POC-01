"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateInput_1 = require("../../../inputs/AddressCreateInput");
let CreateOneAddressArgs = class CreateOneAddressArgs {
};
exports.CreateOneAddressArgs = CreateOneAddressArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateInput_1.AddressCreateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateInput_1.AddressCreateInput)
], CreateOneAddressArgs.prototype, "data", void 0);
exports.CreateOneAddressArgs = CreateOneAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneAddressArgs);
