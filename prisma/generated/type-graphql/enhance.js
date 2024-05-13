"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Address: crudResolvers.AddressCrudResolver,
    Document: crudResolvers.DocumentCrudResolver,
    Client: crudResolvers.ClientCrudResolver
};
const actionResolversMap = {
    Address: {
        aggregateAddress: actionResolvers.AggregateAddressResolver,
        createManyAddress: actionResolvers.CreateManyAddressResolver,
        createOneAddress: actionResolvers.CreateOneAddressResolver,
        deleteManyAddress: actionResolvers.DeleteManyAddressResolver,
        deleteOneAddress: actionResolvers.DeleteOneAddressResolver,
        findFirstAddress: actionResolvers.FindFirstAddressResolver,
        findFirstAddressOrThrow: actionResolvers.FindFirstAddressOrThrowResolver,
        addresses: actionResolvers.FindManyAddressResolver,
        address: actionResolvers.FindUniqueAddressResolver,
        getAddress: actionResolvers.FindUniqueAddressOrThrowResolver,
        groupByAddress: actionResolvers.GroupByAddressResolver,
        updateManyAddress: actionResolvers.UpdateManyAddressResolver,
        updateOneAddress: actionResolvers.UpdateOneAddressResolver,
        upsertOneAddress: actionResolvers.UpsertOneAddressResolver
    },
    Document: {
        aggregateDocument: actionResolvers.AggregateDocumentResolver,
        createManyDocument: actionResolvers.CreateManyDocumentResolver,
        createOneDocument: actionResolvers.CreateOneDocumentResolver,
        deleteManyDocument: actionResolvers.DeleteManyDocumentResolver,
        deleteOneDocument: actionResolvers.DeleteOneDocumentResolver,
        findFirstDocument: actionResolvers.FindFirstDocumentResolver,
        findFirstDocumentOrThrow: actionResolvers.FindFirstDocumentOrThrowResolver,
        documents: actionResolvers.FindManyDocumentResolver,
        document: actionResolvers.FindUniqueDocumentResolver,
        getDocument: actionResolvers.FindUniqueDocumentOrThrowResolver,
        groupByDocument: actionResolvers.GroupByDocumentResolver,
        updateManyDocument: actionResolvers.UpdateManyDocumentResolver,
        updateOneDocument: actionResolvers.UpdateOneDocumentResolver,
        upsertOneDocument: actionResolvers.UpsertOneDocumentResolver
    },
    Client: {
        aggregateClient: actionResolvers.AggregateClientResolver,
        createManyClient: actionResolvers.CreateManyClientResolver,
        createOneClient: actionResolvers.CreateOneClientResolver,
        deleteManyClient: actionResolvers.DeleteManyClientResolver,
        deleteOneClient: actionResolvers.DeleteOneClientResolver,
        findFirstClient: actionResolvers.FindFirstClientResolver,
        findFirstClientOrThrow: actionResolvers.FindFirstClientOrThrowResolver,
        clients: actionResolvers.FindManyClientResolver,
        client: actionResolvers.FindUniqueClientResolver,
        getClient: actionResolvers.FindUniqueClientOrThrowResolver,
        groupByClient: actionResolvers.GroupByClientResolver,
        updateManyClient: actionResolvers.UpdateManyClientResolver,
        updateOneClient: actionResolvers.UpdateOneClientResolver,
        upsertOneClient: actionResolvers.UpsertOneClientResolver
    }
};
const crudResolversInfo = {
    Address: ["aggregateAddress", "createManyAddress", "createOneAddress", "deleteManyAddress", "deleteOneAddress", "findFirstAddress", "findFirstAddressOrThrow", "addresses", "address", "getAddress", "groupByAddress", "updateManyAddress", "updateOneAddress", "upsertOneAddress"],
    Document: ["aggregateDocument", "createManyDocument", "createOneDocument", "deleteManyDocument", "deleteOneDocument", "findFirstDocument", "findFirstDocumentOrThrow", "documents", "document", "getDocument", "groupByDocument", "updateManyDocument", "updateOneDocument", "upsertOneDocument"],
    Client: ["aggregateClient", "createManyClient", "createOneClient", "deleteManyClient", "deleteOneClient", "findFirstClient", "findFirstClientOrThrow", "clients", "client", "getClient", "groupByClient", "updateManyClient", "updateOneClient", "upsertOneClient"]
};
const argsInfo = {
    AggregateAddressArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAddressArgs: ["data", "skipDuplicates"],
    CreateOneAddressArgs: ["data"],
    DeleteManyAddressArgs: ["where"],
    DeleteOneAddressArgs: ["where"],
    FindFirstAddressArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAddressOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAddressArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAddressArgs: ["where"],
    FindUniqueAddressOrThrowArgs: ["where"],
    GroupByAddressArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAddressArgs: ["data", "where"],
    UpdateOneAddressArgs: ["data", "where"],
    UpsertOneAddressArgs: ["where", "create", "update"],
    AggregateDocumentArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyDocumentArgs: ["data", "skipDuplicates"],
    CreateOneDocumentArgs: ["data"],
    DeleteManyDocumentArgs: ["where"],
    DeleteOneDocumentArgs: ["where"],
    FindFirstDocumentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstDocumentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyDocumentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueDocumentArgs: ["where"],
    FindUniqueDocumentOrThrowArgs: ["where"],
    GroupByDocumentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyDocumentArgs: ["data", "where"],
    UpdateOneDocumentArgs: ["data", "where"],
    UpsertOneDocumentArgs: ["where", "create", "update"],
    AggregateClientArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyClientArgs: ["data", "skipDuplicates"],
    CreateOneClientArgs: ["data"],
    DeleteManyClientArgs: ["where"],
    DeleteOneClientArgs: ["where"],
    FindFirstClientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstClientOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyClientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueClientArgs: ["where"],
    FindUniqueClientOrThrowArgs: ["where"],
    GroupByClientArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyClientArgs: ["data", "where"],
    UpdateOneClientArgs: ["data", "where"],
    UpsertOneClientArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators ?? [],
                ...operationKindDecorators ?? [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Address: relationResolvers.AddressRelationsResolver,
    Document: relationResolvers.DocumentRelationsResolver,
    Client: relationResolvers.ClientRelationsResolver
};
const relationResolversInfo = {
    Address: ["client"],
    Document: ["client"],
    Client: ["document", "address"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = relationResolverActionsConfig._all ?? [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = enhanceConfig.fields._all ?? [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Address: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    Document: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    Client: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateAddress: ["_count", "_min", "_max"],
    AddressGroupBy: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId", "_count", "_min", "_max"],
    AggregateDocument: ["_count", "_min", "_max"],
    DocumentGroupBy: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId", "_count", "_min", "_max"],
    AggregateClient: ["_count", "_min", "_max"],
    ClientGroupBy: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AddressCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId", "_all"],
    AddressMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    AddressMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    DocumentCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId", "_all"],
    DocumentMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    DocumentMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    ClientCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "_all"],
    ClientMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    ClientMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    AddressWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId", "client"],
    AddressOrderByWithRelationInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId", "client"],
    AddressWhereUniqueInput: ["id", "billing", "delivery", "clientId", "AND", "OR", "NOT", "createdAt", "deletedAt", "updatedAt", "client"],
    AddressOrderByWithAggregationInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId", "_count", "_max", "_min"],
    AddressScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    DocumentWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId", "client"],
    DocumentOrderByWithRelationInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId", "client"],
    DocumentWhereUniqueInput: ["id", "cpf", "cnpj", "clientId", "AND", "OR", "NOT", "createdAt", "deletedAt", "updatedAt", "client"],
    DocumentOrderByWithAggregationInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId", "_count", "_max", "_min"],
    DocumentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    ClientWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "document", "address"],
    ClientOrderByWithRelationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "document", "address"],
    ClientWhereUniqueInput: ["id", "email", "documentId", "addressId", "AND", "OR", "NOT", "createdAt", "deletedAt", "updatedAt", "name", "document", "address"],
    ClientOrderByWithAggregationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "_count", "_max", "_min"],
    ClientScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    AddressCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId", "client"],
    AddressUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId", "client"],
    AddressCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    AddressUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    DocumentCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId", "client"],
    DocumentUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId", "client"],
    DocumentCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    DocumentUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    ClientCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "document", "address"],
    ClientUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "document", "address"],
    ClientCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    ClientUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    ClientNullableRelationFilter: ["is", "isNot"],
    SortOrderInput: ["sort", "nulls"],
    AddressCountOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    AddressMaxOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    AddressMinOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DocumentCountOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    DocumentMaxOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    DocumentMinOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DocumentRelationFilter: ["is", "isNot"],
    AddressRelationFilter: ["is", "isNot"],
    ClientCountOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    ClientMaxOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    ClientMinOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    ClientCreateNestedOneWithoutAddressInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    ClientUpdateOneWithoutAddressNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    ClientCreateNestedOneWithoutDocumentInput: ["create", "connectOrCreate", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    ClientUpdateOneWithoutDocumentNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    DocumentCreateNestedOneWithoutClientInput: ["create", "connectOrCreate", "connect"],
    AddressCreateNestedOneWithoutClientInput: ["create", "connectOrCreate", "connect"],
    DocumentUpdateOneRequiredWithoutClientNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AddressUpdateOneRequiredWithoutClientNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    ClientCreateWithoutAddressInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "document"],
    ClientCreateOrConnectWithoutAddressInput: ["where", "create"],
    ClientUpsertWithoutAddressInput: ["update", "create", "where"],
    ClientUpdateToOneWithWhereWithoutAddressInput: ["where", "data"],
    ClientUpdateWithoutAddressInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "document"],
    ClientCreateWithoutDocumentInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "address"],
    ClientCreateOrConnectWithoutDocumentInput: ["where", "create"],
    ClientUpsertWithoutDocumentInput: ["update", "create", "where"],
    ClientUpdateToOneWithWhereWithoutDocumentInput: ["where", "data"],
    ClientUpdateWithoutDocumentInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "address"],
    DocumentCreateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    DocumentCreateOrConnectWithoutClientInput: ["where", "create"],
    AddressCreateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    AddressCreateOrConnectWithoutClientInput: ["where", "create"],
    DocumentUpsertWithoutClientInput: ["update", "create", "where"],
    DocumentUpdateToOneWithWhereWithoutClientInput: ["where", "data"],
    DocumentUpdateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    AddressUpsertWithoutClientInput: ["update", "create", "where"],
    AddressUpdateToOneWithWhereWithoutClientInput: ["where", "data"],
    AddressUpdateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
