"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateInput_1 = require("../../../inputs/ClientCreateInput");
let CreateOneClientArgs = class CreateOneClientArgs {
};
exports.CreateOneClientArgs = CreateOneClientArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateInput_1.ClientCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientCreateInput_1.ClientCreateInput)
], CreateOneClientArgs.prototype, "data", void 0);
exports.CreateOneClientArgs = CreateOneClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneClientArgs);
