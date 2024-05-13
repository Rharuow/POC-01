"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateManyInput_1 = require("../../../inputs/AddressCreateManyInput");
let CreateManyAddressArgs = class CreateManyAddressArgs {
};
exports.CreateManyAddressArgs = CreateManyAddressArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressCreateManyInput_1.AddressCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAddressArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAddressArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyAddressArgs = CreateManyAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAddressArgs);
