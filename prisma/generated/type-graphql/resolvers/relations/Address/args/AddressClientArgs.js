"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientWhereInput_1 = require("../../../inputs/ClientWhereInput");
let AddressClientArgs = class AddressClientArgs {
};
exports.AddressClientArgs = AddressClientArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], AddressClientArgs.prototype, "where", void 0);
exports.AddressClientArgs = AddressClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AddressClientArgs);
