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
    Client: crudResolvers.ClientCrudResolver,
    Category: crudResolvers.CategoryCrudResolver,
    Product: crudResolvers.ProductCrudResolver,
    Order: crudResolvers.OrderCrudResolver,
    Sale: crudResolvers.SaleCrudResolver
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
    },
    Category: {
        aggregateCategory: actionResolvers.AggregateCategoryResolver,
        createManyCategory: actionResolvers.CreateManyCategoryResolver,
        createOneCategory: actionResolvers.CreateOneCategoryResolver,
        deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
        deleteOneCategory: actionResolvers.DeleteOneCategoryResolver,
        findFirstCategory: actionResolvers.FindFirstCategoryResolver,
        findFirstCategoryOrThrow: actionResolvers.FindFirstCategoryOrThrowResolver,
        categories: actionResolvers.FindManyCategoryResolver,
        category: actionResolvers.FindUniqueCategoryResolver,
        getCategory: actionResolvers.FindUniqueCategoryOrThrowResolver,
        groupByCategory: actionResolvers.GroupByCategoryResolver,
        updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
        updateOneCategory: actionResolvers.UpdateOneCategoryResolver,
        upsertOneCategory: actionResolvers.UpsertOneCategoryResolver
    },
    Product: {
        aggregateProduct: actionResolvers.AggregateProductResolver,
        createManyProduct: actionResolvers.CreateManyProductResolver,
        createOneProduct: actionResolvers.CreateOneProductResolver,
        deleteManyProduct: actionResolvers.DeleteManyProductResolver,
        deleteOneProduct: actionResolvers.DeleteOneProductResolver,
        findFirstProduct: actionResolvers.FindFirstProductResolver,
        findFirstProductOrThrow: actionResolvers.FindFirstProductOrThrowResolver,
        products: actionResolvers.FindManyProductResolver,
        product: actionResolvers.FindUniqueProductResolver,
        getProduct: actionResolvers.FindUniqueProductOrThrowResolver,
        groupByProduct: actionResolvers.GroupByProductResolver,
        updateManyProduct: actionResolvers.UpdateManyProductResolver,
        updateOneProduct: actionResolvers.UpdateOneProductResolver,
        upsertOneProduct: actionResolvers.UpsertOneProductResolver
    },
    Order: {
        aggregateOrder: actionResolvers.AggregateOrderResolver,
        createManyOrder: actionResolvers.CreateManyOrderResolver,
        createOneOrder: actionResolvers.CreateOneOrderResolver,
        deleteManyOrder: actionResolvers.DeleteManyOrderResolver,
        deleteOneOrder: actionResolvers.DeleteOneOrderResolver,
        findFirstOrder: actionResolvers.FindFirstOrderResolver,
        findFirstOrderOrThrow: actionResolvers.FindFirstOrderOrThrowResolver,
        orders: actionResolvers.FindManyOrderResolver,
        order: actionResolvers.FindUniqueOrderResolver,
        getOrder: actionResolvers.FindUniqueOrderOrThrowResolver,
        groupByOrder: actionResolvers.GroupByOrderResolver,
        updateManyOrder: actionResolvers.UpdateManyOrderResolver,
        updateOneOrder: actionResolvers.UpdateOneOrderResolver,
        upsertOneOrder: actionResolvers.UpsertOneOrderResolver
    },
    Sale: {
        aggregateSale: actionResolvers.AggregateSaleResolver,
        createManySale: actionResolvers.CreateManySaleResolver,
        createOneSale: actionResolvers.CreateOneSaleResolver,
        deleteManySale: actionResolvers.DeleteManySaleResolver,
        deleteOneSale: actionResolvers.DeleteOneSaleResolver,
        findFirstSale: actionResolvers.FindFirstSaleResolver,
        findFirstSaleOrThrow: actionResolvers.FindFirstSaleOrThrowResolver,
        sales: actionResolvers.FindManySaleResolver,
        sale: actionResolvers.FindUniqueSaleResolver,
        getSale: actionResolvers.FindUniqueSaleOrThrowResolver,
        groupBySale: actionResolvers.GroupBySaleResolver,
        updateManySale: actionResolvers.UpdateManySaleResolver,
        updateOneSale: actionResolvers.UpdateOneSaleResolver,
        upsertOneSale: actionResolvers.UpsertOneSaleResolver
    }
};
const crudResolversInfo = {
    Address: ["aggregateAddress", "createManyAddress", "createOneAddress", "deleteManyAddress", "deleteOneAddress", "findFirstAddress", "findFirstAddressOrThrow", "addresses", "address", "getAddress", "groupByAddress", "updateManyAddress", "updateOneAddress", "upsertOneAddress"],
    Document: ["aggregateDocument", "createManyDocument", "createOneDocument", "deleteManyDocument", "deleteOneDocument", "findFirstDocument", "findFirstDocumentOrThrow", "documents", "document", "getDocument", "groupByDocument", "updateManyDocument", "updateOneDocument", "upsertOneDocument"],
    Client: ["aggregateClient", "createManyClient", "createOneClient", "deleteManyClient", "deleteOneClient", "findFirstClient", "findFirstClientOrThrow", "clients", "client", "getClient", "groupByClient", "updateManyClient", "updateOneClient", "upsertOneClient"],
    Category: ["aggregateCategory", "createManyCategory", "createOneCategory", "deleteManyCategory", "deleteOneCategory", "findFirstCategory", "findFirstCategoryOrThrow", "categories", "category", "getCategory", "groupByCategory", "updateManyCategory", "updateOneCategory", "upsertOneCategory"],
    Product: ["aggregateProduct", "createManyProduct", "createOneProduct", "deleteManyProduct", "deleteOneProduct", "findFirstProduct", "findFirstProductOrThrow", "products", "product", "getProduct", "groupByProduct", "updateManyProduct", "updateOneProduct", "upsertOneProduct"],
    Order: ["aggregateOrder", "createManyOrder", "createOneOrder", "deleteManyOrder", "deleteOneOrder", "findFirstOrder", "findFirstOrderOrThrow", "orders", "order", "getOrder", "groupByOrder", "updateManyOrder", "updateOneOrder", "upsertOneOrder"],
    Sale: ["aggregateSale", "createManySale", "createOneSale", "deleteManySale", "deleteOneSale", "findFirstSale", "findFirstSaleOrThrow", "sales", "sale", "getSale", "groupBySale", "updateManySale", "updateOneSale", "upsertOneSale"]
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
    UpsertOneClientArgs: ["where", "create", "update"],
    AggregateCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyCategoryArgs: ["data", "skipDuplicates"],
    CreateOneCategoryArgs: ["data"],
    DeleteManyCategoryArgs: ["where"],
    DeleteOneCategoryArgs: ["where"],
    FindFirstCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstCategoryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCategoryArgs: ["where"],
    FindUniqueCategoryOrThrowArgs: ["where"],
    GroupByCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCategoryArgs: ["data", "where"],
    UpdateOneCategoryArgs: ["data", "where"],
    UpsertOneCategoryArgs: ["where", "create", "update"],
    AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyProductArgs: ["data", "skipDuplicates"],
    CreateOneProductArgs: ["data"],
    DeleteManyProductArgs: ["where"],
    DeleteOneProductArgs: ["where"],
    FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstProductOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueProductArgs: ["where"],
    FindUniqueProductOrThrowArgs: ["where"],
    GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyProductArgs: ["data", "where"],
    UpdateOneProductArgs: ["data", "where"],
    UpsertOneProductArgs: ["where", "create", "update"],
    AggregateOrderArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyOrderArgs: ["data", "skipDuplicates"],
    CreateOneOrderArgs: ["data"],
    DeleteManyOrderArgs: ["where"],
    DeleteOneOrderArgs: ["where"],
    FindFirstOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstOrderOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueOrderArgs: ["where"],
    FindUniqueOrderOrThrowArgs: ["where"],
    GroupByOrderArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyOrderArgs: ["data", "where"],
    UpdateOneOrderArgs: ["data", "where"],
    UpsertOneOrderArgs: ["where", "create", "update"],
    AggregateSaleArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManySaleArgs: ["data", "skipDuplicates"],
    CreateOneSaleArgs: ["data"],
    DeleteManySaleArgs: ["where"],
    DeleteOneSaleArgs: ["where"],
    FindFirstSaleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstSaleOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySaleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueSaleArgs: ["where"],
    FindUniqueSaleOrThrowArgs: ["where"],
    GroupBySaleArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManySaleArgs: ["data", "where"],
    UpdateOneSaleArgs: ["data", "where"],
    UpsertOneSaleArgs: ["where", "create", "update"]
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
    Client: relationResolvers.ClientRelationsResolver,
    Category: relationResolvers.CategoryRelationsResolver,
    Product: relationResolvers.ProductRelationsResolver,
    Order: relationResolvers.OrderRelationsResolver,
    Sale: relationResolvers.SaleRelationsResolver
};
const relationResolversInfo = {
    Address: ["client"],
    Document: ["client"],
    Client: ["document", "address", "sales"],
    Category: ["produtos"],
    Product: ["categories", "orders"],
    Order: ["product", "sale"],
    Sale: ["orders", "client"]
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
    Client: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    Category: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    Product: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity"],
    Order: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId"],
    Sale: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"]
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
    AggregateCategory: ["_count", "_min", "_max"],
    CategoryGroupBy: ["id", "createdAt", "deletedAt", "updatedAt", "name", "_count", "_min", "_max"],
    AggregateProduct: ["_count", "_avg", "_sum", "_min", "_max"],
    ProductGroupBy: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateOrder: ["_count", "_avg", "_sum", "_min", "_max"],
    OrderGroupBy: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSale: ["_count", "_avg", "_sum", "_min", "_max"],
    SaleGroupBy: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AddressCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId", "_all"],
    AddressMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    AddressMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    DocumentCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId", "_all"],
    DocumentMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    DocumentMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    ClientCount: ["sales"],
    ClientCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "_all"],
    ClientMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    ClientMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    CategoryCount: ["produtos"],
    CategoryCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "_all"],
    CategoryMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    CategoryMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    ProductCount: ["categories", "orders"],
    ProductCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "_all"],
    ProductAvgAggregate: ["inventory_quantity"],
    ProductSumAggregate: ["inventory_quantity"],
    ProductMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity"],
    ProductMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity"],
    OrderCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId", "_all"],
    OrderAvgAggregate: ["amount", "totalPrice"],
    OrderSumAggregate: ["amount", "totalPrice"],
    OrderMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId"],
    OrderMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId"],
    SaleCount: ["orders"],
    SaleCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId", "_all"],
    SaleAvgAggregate: ["totalPrice"],
    SaleSumAggregate: ["totalPrice"],
    SaleMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"],
    SaleMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"]
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
    ClientWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "document", "address", "sales"],
    ClientOrderByWithRelationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "document", "address", "sales"],
    ClientWhereUniqueInput: ["id", "email", "documentId", "addressId", "AND", "OR", "NOT", "createdAt", "deletedAt", "updatedAt", "name", "document", "address", "sales"],
    ClientOrderByWithAggregationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "_count", "_max", "_min"],
    ClientScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    CategoryWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name", "produtos"],
    CategoryOrderByWithRelationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "produtos"],
    CategoryWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "createdAt", "deletedAt", "updatedAt", "produtos"],
    CategoryOrderByWithAggregationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "_count", "_max", "_min"],
    CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name"],
    ProductWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "categories", "orders"],
    ProductOrderByWithRelationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "categories", "orders"],
    ProductWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "createdAt", "deletedAt", "updatedAt", "description", "inventory_quantity", "categories", "orders"],
    ProductOrderByWithAggregationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "_count", "_avg", "_max", "_min", "_sum"],
    ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity"],
    OrderWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId", "product", "sale"],
    OrderOrderByWithRelationInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId", "product", "sale"],
    OrderWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId", "product", "sale"],
    OrderOrderByWithAggregationInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId", "_count", "_avg", "_max", "_min", "_sum"],
    OrderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId"],
    SaleWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId", "orders", "client"],
    SaleOrderByWithRelationInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId", "orders", "client"],
    SaleWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId", "orders", "client"],
    SaleOrderByWithAggregationInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId", "_count", "_avg", "_max", "_min", "_sum"],
    SaleScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"],
    AddressCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId", "client"],
    AddressUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId", "client"],
    AddressCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    AddressUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    DocumentCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId", "client"],
    DocumentUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId", "client"],
    DocumentCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    DocumentUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    ClientCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "document", "address", "sales"],
    ClientUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "document", "address", "sales"],
    ClientCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    ClientUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email"],
    CategoryCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "produtos"],
    CategoryUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "produtos"],
    CategoryCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    CategoryUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    ProductCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "categories", "orders"],
    ProductUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "categories", "orders"],
    ProductCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity"],
    ProductUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity"],
    OrderCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "product", "sale"],
    OrderUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "product", "sale"],
    OrderCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId"],
    OrderUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice"],
    SaleCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "orders", "client"],
    SaleUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "orders", "client"],
    SaleCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"],
    SaleUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice"],
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
    SaleListRelationFilter: ["every", "some", "none"],
    SaleOrderByRelationAggregateInput: ["_count"],
    ClientCountOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    ClientMaxOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    ClientMinOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    ProductListRelationFilter: ["every", "some", "none"],
    ProductOrderByRelationAggregateInput: ["_count"],
    CategoryCountOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    CategoryMaxOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    CategoryMinOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    CategoryListRelationFilter: ["every", "some", "none"],
    OrderListRelationFilter: ["every", "some", "none"],
    CategoryOrderByRelationAggregateInput: ["_count"],
    OrderOrderByRelationAggregateInput: ["_count"],
    ProductCountOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity"],
    ProductAvgOrderByAggregateInput: ["inventory_quantity"],
    ProductMaxOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity"],
    ProductMinOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity"],
    ProductSumOrderByAggregateInput: ["inventory_quantity"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    ProductRelationFilter: ["is", "isNot"],
    SaleRelationFilter: ["is", "isNot"],
    OrderCountOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId"],
    OrderAvgOrderByAggregateInput: ["amount", "totalPrice"],
    OrderMaxOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId"],
    OrderMinOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId"],
    OrderSumOrderByAggregateInput: ["amount", "totalPrice"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    ClientRelationFilter: ["is", "isNot"],
    SaleCountOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"],
    SaleAvgOrderByAggregateInput: ["totalPrice"],
    SaleMaxOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"],
    SaleMinOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"],
    SaleSumOrderByAggregateInput: ["totalPrice"],
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
    SaleCreateNestedManyWithoutClientInput: ["create", "connectOrCreate", "createMany", "connect"],
    DocumentUpdateOneRequiredWithoutClientNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AddressUpdateOneRequiredWithoutClientNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    SaleUpdateManyWithoutClientNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProductCreateNestedManyWithoutCategoriesInput: ["create", "connectOrCreate", "connect"],
    ProductUpdateManyWithoutCategoriesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CategoryCreateNestedManyWithoutProdutosInput: ["create", "connectOrCreate", "connect"],
    OrderCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    CategoryUpdateManyWithoutProdutosNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    OrderUpdateManyWithoutProductNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProductCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
    SaleCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    ProductUpdateOneRequiredWithoutOrdersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    SaleUpdateOneRequiredWithoutOrdersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    OrderCreateNestedManyWithoutSaleInput: ["create", "connectOrCreate", "createMany", "connect"],
    ClientCreateNestedOneWithoutSalesInput: ["create", "connectOrCreate", "connect"],
    OrderUpdateManyWithoutSaleNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ClientUpdateOneRequiredWithoutSalesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
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
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    ClientCreateWithoutAddressInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "document", "sales"],
    ClientCreateOrConnectWithoutAddressInput: ["where", "create"],
    ClientUpsertWithoutAddressInput: ["update", "create", "where"],
    ClientUpdateToOneWithWhereWithoutAddressInput: ["where", "data"],
    ClientUpdateWithoutAddressInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "document", "sales"],
    ClientCreateWithoutDocumentInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "address", "sales"],
    ClientCreateOrConnectWithoutDocumentInput: ["where", "create"],
    ClientUpsertWithoutDocumentInput: ["update", "create", "where"],
    ClientUpdateToOneWithWhereWithoutDocumentInput: ["where", "data"],
    ClientUpdateWithoutDocumentInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "address", "sales"],
    DocumentCreateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    DocumentCreateOrConnectWithoutClientInput: ["where", "create"],
    AddressCreateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    AddressCreateOrConnectWithoutClientInput: ["where", "create"],
    SaleCreateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "orders"],
    SaleCreateOrConnectWithoutClientInput: ["where", "create"],
    SaleCreateManyClientInputEnvelope: ["data", "skipDuplicates"],
    DocumentUpsertWithoutClientInput: ["update", "create", "where"],
    DocumentUpdateToOneWithWhereWithoutClientInput: ["where", "data"],
    DocumentUpdateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    AddressUpsertWithoutClientInput: ["update", "create", "where"],
    AddressUpdateToOneWithWhereWithoutClientInput: ["where", "data"],
    AddressUpdateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    SaleUpsertWithWhereUniqueWithoutClientInput: ["where", "update", "create"],
    SaleUpdateWithWhereUniqueWithoutClientInput: ["where", "data"],
    SaleUpdateManyWithWhereWithoutClientInput: ["where", "data"],
    SaleScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"],
    ProductCreateWithoutCategoriesInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "orders"],
    ProductCreateOrConnectWithoutCategoriesInput: ["where", "create"],
    ProductUpsertWithWhereUniqueWithoutCategoriesInput: ["where", "update", "create"],
    ProductUpdateWithWhereUniqueWithoutCategoriesInput: ["where", "data"],
    ProductUpdateManyWithWhereWithoutCategoriesInput: ["where", "data"],
    ProductScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity"],
    CategoryCreateWithoutProdutosInput: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    CategoryCreateOrConnectWithoutProdutosInput: ["where", "create"],
    OrderCreateWithoutProductInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "sale"],
    OrderCreateOrConnectWithoutProductInput: ["where", "create"],
    OrderCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
    CategoryUpsertWithWhereUniqueWithoutProdutosInput: ["where", "update", "create"],
    CategoryUpdateWithWhereUniqueWithoutProdutosInput: ["where", "data"],
    CategoryUpdateManyWithWhereWithoutProdutosInput: ["where", "data"],
    CategoryScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name"],
    OrderUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
    OrderUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
    OrderUpdateManyWithWhereWithoutProductInput: ["where", "data"],
    OrderScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "saleId"],
    ProductCreateWithoutOrdersInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "categories"],
    ProductCreateOrConnectWithoutOrdersInput: ["where", "create"],
    SaleCreateWithoutOrdersInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "client"],
    SaleCreateOrConnectWithoutOrdersInput: ["where", "create"],
    ProductUpsertWithoutOrdersInput: ["update", "create", "where"],
    ProductUpdateToOneWithWhereWithoutOrdersInput: ["where", "data"],
    ProductUpdateWithoutOrdersInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "categories"],
    SaleUpsertWithoutOrdersInput: ["update", "create", "where"],
    SaleUpdateToOneWithWhereWithoutOrdersInput: ["where", "data"],
    SaleUpdateWithoutOrdersInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "client"],
    OrderCreateWithoutSaleInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "product"],
    OrderCreateOrConnectWithoutSaleInput: ["where", "create"],
    OrderCreateManySaleInputEnvelope: ["data", "skipDuplicates"],
    ClientCreateWithoutSalesInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "document", "address"],
    ClientCreateOrConnectWithoutSalesInput: ["where", "create"],
    OrderUpsertWithWhereUniqueWithoutSaleInput: ["where", "update", "create"],
    OrderUpdateWithWhereUniqueWithoutSaleInput: ["where", "data"],
    OrderUpdateManyWithWhereWithoutSaleInput: ["where", "data"],
    ClientUpsertWithoutSalesInput: ["update", "create", "where"],
    ClientUpdateToOneWithWhereWithoutSalesInput: ["where", "data"],
    ClientUpdateWithoutSalesInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "document", "address"],
    SaleCreateManyClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice"],
    SaleUpdateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "orders"],
    ProductUpdateWithoutCategoriesInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "orders"],
    OrderCreateManyProductInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "saleId"],
    CategoryUpdateWithoutProdutosInput: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    OrderUpdateWithoutProductInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "sale"],
    OrderCreateManySaleInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId"],
    OrderUpdateWithoutSaleInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "product"]
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
