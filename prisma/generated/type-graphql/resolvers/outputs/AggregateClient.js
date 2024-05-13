"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateClient = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCountAggregate_1 = require("../outputs/ClientCountAggregate");
const ClientMaxAggregate_1 = require("../outputs/ClientMaxAggregate");
const ClientMinAggregate_1 = require("../outputs/ClientMinAggregate");
let AggregateClient = class AggregateClient {
};
exports.AggregateClient = AggregateClient;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCountAggregate_1.ClientCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCountAggregate_1.ClientCountAggregate)
], AggregateClient.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientMinAggregate_1.ClientMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientMinAggregate_1.ClientMinAggregate)
], AggregateClient.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientMaxAggregate_1.ClientMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientMaxAggregate_1.ClientMaxAggregate)
], AggregateClient.prototype, "_max", void 0);
exports.AggregateClient = AggregateClient = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateClient", {})
], AggregateClient);
