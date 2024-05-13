"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleCreateManyClientInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCreateManyClientInput_1 = require("../inputs/SaleCreateManyClientInput");
let SaleCreateManyClientInputEnvelope = class SaleCreateManyClientInputEnvelope {
};
exports.SaleCreateManyClientInputEnvelope = SaleCreateManyClientInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleCreateManyClientInput_1.SaleCreateManyClientInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SaleCreateManyClientInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SaleCreateManyClientInputEnvelope.prototype, "skipDuplicates", void 0);
exports.SaleCreateManyClientInputEnvelope = SaleCreateManyClientInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("SaleCreateManyClientInputEnvelope", {})
], SaleCreateManyClientInputEnvelope);
