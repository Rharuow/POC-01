"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateManyInput_1 = require("../../../inputs/ClientCreateManyInput");
let CreateManyClientArgs = class CreateManyClientArgs {
};
exports.CreateManyClientArgs = CreateManyClientArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ClientCreateManyInput_1.ClientCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyClientArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyClientArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyClientArgs = CreateManyClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyClientArgs);
