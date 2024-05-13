"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleUpdateOneRequiredWithoutOrdersNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCreateOrConnectWithoutOrdersInput_1 = require("../inputs/SaleCreateOrConnectWithoutOrdersInput");
const SaleCreateWithoutOrdersInput_1 = require("../inputs/SaleCreateWithoutOrdersInput");
const SaleUpdateToOneWithWhereWithoutOrdersInput_1 = require("../inputs/SaleUpdateToOneWithWhereWithoutOrdersInput");
const SaleUpsertWithoutOrdersInput_1 = require("../inputs/SaleUpsertWithoutOrdersInput");
const SaleWhereUniqueInput_1 = require("../inputs/SaleWhereUniqueInput");
let SaleUpdateOneRequiredWithoutOrdersNestedInput = class SaleUpdateOneRequiredWithoutOrdersNestedInput {
};
exports.SaleUpdateOneRequiredWithoutOrdersNestedInput = SaleUpdateOneRequiredWithoutOrdersNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateWithoutOrdersInput_1.SaleCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleCreateWithoutOrdersInput_1.SaleCreateWithoutOrdersInput)
], SaleUpdateOneRequiredWithoutOrdersNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleCreateOrConnectWithoutOrdersInput_1.SaleCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleCreateOrConnectWithoutOrdersInput_1.SaleCreateOrConnectWithoutOrdersInput)
], SaleUpdateOneRequiredWithoutOrdersNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleUpsertWithoutOrdersInput_1.SaleUpsertWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleUpsertWithoutOrdersInput_1.SaleUpsertWithoutOrdersInput)
], SaleUpdateOneRequiredWithoutOrdersNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleWhereUniqueInput_1.SaleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleWhereUniqueInput_1.SaleWhereUniqueInput)
], SaleUpdateOneRequiredWithoutOrdersNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SaleUpdateToOneWithWhereWithoutOrdersInput_1.SaleUpdateToOneWithWhereWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SaleUpdateToOneWithWhereWithoutOrdersInput_1.SaleUpdateToOneWithWhereWithoutOrdersInput)
], SaleUpdateOneRequiredWithoutOrdersNestedInput.prototype, "update", void 0);
exports.SaleUpdateOneRequiredWithoutOrdersNestedInput = SaleUpdateOneRequiredWithoutOrdersNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleUpdateOneRequiredWithoutOrdersNestedInput", {})
], SaleUpdateOneRequiredWithoutOrdersNestedInput);
