"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySaleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SaleCreateManyInput_1 = require("../../../inputs/SaleCreateManyInput");
let CreateManySaleArgs = class CreateManySaleArgs {
};
exports.CreateManySaleArgs = CreateManySaleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SaleCreateManyInput_1.SaleCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySaleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySaleArgs.prototype, "skipDuplicates", void 0);
exports.CreateManySaleArgs = CreateManySaleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySaleArgs);
