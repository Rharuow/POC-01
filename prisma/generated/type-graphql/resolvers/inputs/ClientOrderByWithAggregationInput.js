"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCountOrderByAggregateInput_1 = require("../inputs/ClientCountOrderByAggregateInput");
const ClientMaxOrderByAggregateInput_1 = require("../inputs/ClientMaxOrderByAggregateInput");
const ClientMinOrderByAggregateInput_1 = require("../inputs/ClientMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ClientOrderByWithAggregationInput = class ClientOrderByWithAggregationInput {
};
exports.ClientOrderByWithAggregationInput = ClientOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ClientOrderByWithAggregationInput.prototype, "deletedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithAggregationInput.prototype, "documentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithAggregationInput.prototype, "addressId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCountOrderByAggregateInput_1.ClientCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCountOrderByAggregateInput_1.ClientCountOrderByAggregateInput)
], ClientOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientMaxOrderByAggregateInput_1.ClientMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientMaxOrderByAggregateInput_1.ClientMaxOrderByAggregateInput)
], ClientOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientMinOrderByAggregateInput_1.ClientMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientMinOrderByAggregateInput_1.ClientMinOrderByAggregateInput)
], ClientOrderByWithAggregationInput.prototype, "_min", void 0);
exports.ClientOrderByWithAggregationInput = ClientOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientOrderByWithAggregationInput", {})
], ClientOrderByWithAggregationInput);
