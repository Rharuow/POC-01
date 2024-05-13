"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpdateOneRequiredWithoutClientNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateOrConnectWithoutClientInput_1 = require("../inputs/AddressCreateOrConnectWithoutClientInput");
const AddressCreateWithoutClientInput_1 = require("../inputs/AddressCreateWithoutClientInput");
const AddressUpdateToOneWithWhereWithoutClientInput_1 = require("../inputs/AddressUpdateToOneWithWhereWithoutClientInput");
const AddressUpsertWithoutClientInput_1 = require("../inputs/AddressUpsertWithoutClientInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressUpdateOneRequiredWithoutClientNestedInput = class AddressUpdateOneRequiredWithoutClientNestedInput {
};
exports.AddressUpdateOneRequiredWithoutClientNestedInput = AddressUpdateOneRequiredWithoutClientNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateWithoutClientInput_1.AddressCreateWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateWithoutClientInput_1.AddressCreateWithoutClientInput)
], AddressUpdateOneRequiredWithoutClientNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateOrConnectWithoutClientInput_1.AddressCreateOrConnectWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateOrConnectWithoutClientInput_1.AddressCreateOrConnectWithoutClientInput)
], AddressUpdateOneRequiredWithoutClientNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpsertWithoutClientInput_1.AddressUpsertWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpsertWithoutClientInput_1.AddressUpsertWithoutClientInput)
], AddressUpdateOneRequiredWithoutClientNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressUpdateOneRequiredWithoutClientNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateToOneWithWhereWithoutClientInput_1.AddressUpdateToOneWithWhereWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpdateToOneWithWhereWithoutClientInput_1.AddressUpdateToOneWithWhereWithoutClientInput)
], AddressUpdateOneRequiredWithoutClientNestedInput.prototype, "update", void 0);
exports.AddressUpdateOneRequiredWithoutClientNestedInput = AddressUpdateOneRequiredWithoutClientNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUpdateOneRequiredWithoutClientNestedInput", {})
], AddressUpdateOneRequiredWithoutClientNestedInput);
