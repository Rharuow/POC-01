"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpdateOneWithoutClientNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateOrConnectWithoutClientInput_1 = require("../inputs/AddressCreateOrConnectWithoutClientInput");
const AddressCreateWithoutClientInput_1 = require("../inputs/AddressCreateWithoutClientInput");
const AddressUpdateToOneWithWhereWithoutClientInput_1 = require("../inputs/AddressUpdateToOneWithWhereWithoutClientInput");
const AddressUpsertWithoutClientInput_1 = require("../inputs/AddressUpsertWithoutClientInput");
const AddressWhereInput_1 = require("../inputs/AddressWhereInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressUpdateOneWithoutClientNestedInput = class AddressUpdateOneWithoutClientNestedInput {
};
exports.AddressUpdateOneWithoutClientNestedInput = AddressUpdateOneWithoutClientNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateWithoutClientInput_1.AddressCreateWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateWithoutClientInput_1.AddressCreateWithoutClientInput)
], AddressUpdateOneWithoutClientNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateOrConnectWithoutClientInput_1.AddressCreateOrConnectWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateOrConnectWithoutClientInput_1.AddressCreateOrConnectWithoutClientInput)
], AddressUpdateOneWithoutClientNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpsertWithoutClientInput_1.AddressUpsertWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpsertWithoutClientInput_1.AddressUpsertWithoutClientInput)
], AddressUpdateOneWithoutClientNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressUpdateOneWithoutClientNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressUpdateOneWithoutClientNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressUpdateOneWithoutClientNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateToOneWithWhereWithoutClientInput_1.AddressUpdateToOneWithWhereWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpdateToOneWithWhereWithoutClientInput_1.AddressUpdateToOneWithWhereWithoutClientInput)
], AddressUpdateOneWithoutClientNestedInput.prototype, "update", void 0);
exports.AddressUpdateOneWithoutClientNestedInput = AddressUpdateOneWithoutClientNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUpdateOneWithoutClientNestedInput", {})
], AddressUpdateOneWithoutClientNestedInput);
