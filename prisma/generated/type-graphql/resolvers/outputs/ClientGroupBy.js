"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCountAggregate_1 = require("../outputs/ClientCountAggregate");
const ClientMaxAggregate_1 = require("../outputs/ClientMaxAggregate");
const ClientMinAggregate_1 = require("../outputs/ClientMinAggregate");
let ClientGroupBy = class ClientGroupBy {
};
exports.ClientGroupBy = ClientGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ClientGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientGroupBy.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ClientGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientGroupBy.prototype, "documentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientGroupBy.prototype, "addressId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCountAggregate_1.ClientCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCountAggregate_1.ClientCountAggregate)
], ClientGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientMinAggregate_1.ClientMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientMinAggregate_1.ClientMinAggregate)
], ClientGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientMaxAggregate_1.ClientMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientMaxAggregate_1.ClientMaxAggregate)
], ClientGroupBy.prototype, "_max", void 0);
exports.ClientGroupBy = ClientGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ClientGroupBy", {})
], ClientGroupBy);
