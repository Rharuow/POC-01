"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DocumentScalarFieldEnum;
(function (DocumentScalarFieldEnum) {
    DocumentScalarFieldEnum["id"] = "id";
    DocumentScalarFieldEnum["createdAt"] = "createdAt";
    DocumentScalarFieldEnum["deletedAt"] = "deletedAt";
    DocumentScalarFieldEnum["updatedAt"] = "updatedAt";
    DocumentScalarFieldEnum["cpf"] = "cpf";
    DocumentScalarFieldEnum["cnpj"] = "cnpj";
    DocumentScalarFieldEnum["clientId"] = "clientId";
})(DocumentScalarFieldEnum || (exports.DocumentScalarFieldEnum = DocumentScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(DocumentScalarFieldEnum, {
    name: "DocumentScalarFieldEnum",
    description: undefined,
});
