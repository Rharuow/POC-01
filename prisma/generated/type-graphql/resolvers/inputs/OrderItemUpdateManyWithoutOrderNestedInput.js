"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemUpdateManyWithoutOrderNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderItemCreateManyOrderInputEnvelope_1 = require("../inputs/OrderItemCreateManyOrderInputEnvelope");
const OrderItemCreateOrConnectWithoutOrderInput_1 = require("../inputs/OrderItemCreateOrConnectWithoutOrderInput");
const OrderItemCreateWithoutOrderInput_1 = require("../inputs/OrderItemCreateWithoutOrderInput");
const OrderItemScalarWhereInput_1 = require("../inputs/OrderItemScalarWhereInput");
const OrderItemUpdateManyWithWhereWithoutOrderInput_1 = require("../inputs/OrderItemUpdateManyWithWhereWithoutOrderInput");
const OrderItemUpdateWithWhereUniqueWithoutOrderInput_1 = require("../inputs/OrderItemUpdateWithWhereUniqueWithoutOrderInput");
const OrderItemUpsertWithWhereUniqueWithoutOrderInput_1 = require("../inputs/OrderItemUpsertWithWhereUniqueWithoutOrderInput");
const OrderItemWhereUniqueInput_1 = require("../inputs/OrderItemWhereUniqueInput");
let OrderItemUpdateManyWithoutOrderNestedInput = class OrderItemUpdateManyWithoutOrderNestedInput {
};
exports.OrderItemUpdateManyWithoutOrderNestedInput = OrderItemUpdateManyWithoutOrderNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateWithoutOrderInput_1.OrderItemCreateWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateOrConnectWithoutOrderInput_1.OrderItemCreateOrConnectWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemUpsertWithWhereUniqueWithoutOrderInput_1.OrderItemUpsertWithWhereUniqueWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateManyOrderInputEnvelope_1.OrderItemCreateManyOrderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderItemCreateManyOrderInputEnvelope_1.OrderItemCreateManyOrderInputEnvelope)
], OrderItemUpdateManyWithoutOrderNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemUpdateWithWhereUniqueWithoutOrderInput_1.OrderItemUpdateWithWhereUniqueWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemUpdateManyWithWhereWithoutOrderInput_1.OrderItemUpdateManyWithWhereWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderItemScalarWhereInput_1.OrderItemScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderNestedInput.prototype, "deleteMany", void 0);
exports.OrderItemUpdateManyWithoutOrderNestedInput = OrderItemUpdateManyWithoutOrderNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderItemUpdateManyWithoutOrderNestedInput", {})
], OrderItemUpdateManyWithoutOrderNestedInput);
