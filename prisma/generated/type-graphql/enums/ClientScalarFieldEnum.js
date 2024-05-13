"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ClientScalarFieldEnum;
(function (ClientScalarFieldEnum) {
    ClientScalarFieldEnum["id"] = "id";
    ClientScalarFieldEnum["createdAt"] = "createdAt";
    ClientScalarFieldEnum["deletedAt"] = "deletedAt";
    ClientScalarFieldEnum["updatedAt"] = "updatedAt";
    ClientScalarFieldEnum["name"] = "name";
    ClientScalarFieldEnum["email"] = "email";
    ClientScalarFieldEnum["documentId"] = "documentId";
    ClientScalarFieldEnum["addressId"] = "addressId";
})(ClientScalarFieldEnum || (exports.ClientScalarFieldEnum = ClientScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ClientScalarFieldEnum, {
    name: "ClientScalarFieldEnum",
    description: undefined,
});
