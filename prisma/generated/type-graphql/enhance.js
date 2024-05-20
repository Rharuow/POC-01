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
    CategoriesProducts: crudResolvers.CategoriesProductsCrudResolver,
    OrderItem: crudResolvers.OrderItemCrudResolver,
    Order: crudResolvers.OrderCrudResolver
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
    CategoriesProducts: {
        aggregateCategoriesProducts: actionResolvers.AggregateCategoriesProductsResolver,
        createManyCategoriesProducts: actionResolvers.CreateManyCategoriesProductsResolver,
        createOneCategoriesProducts: actionResolvers.CreateOneCategoriesProductsResolver,
        deleteManyCategoriesProducts: actionResolvers.DeleteManyCategoriesProductsResolver,
        deleteOneCategoriesProducts: actionResolvers.DeleteOneCategoriesProductsResolver,
        findFirstCategoriesProducts: actionResolvers.FindFirstCategoriesProductsResolver,
        findFirstCategoriesProductsOrThrow: actionResolvers.FindFirstCategoriesProductsOrThrowResolver,
        findManyCategoriesProducts: actionResolvers.FindManyCategoriesProductsResolver,
        findUniqueCategoriesProducts: actionResolvers.FindUniqueCategoriesProductsResolver,
        findUniqueCategoriesProductsOrThrow: actionResolvers.FindUniqueCategoriesProductsOrThrowResolver,
        groupByCategoriesProducts: actionResolvers.GroupByCategoriesProductsResolver,
        updateManyCategoriesProducts: actionResolvers.UpdateManyCategoriesProductsResolver,
        updateOneCategoriesProducts: actionResolvers.UpdateOneCategoriesProductsResolver,
        upsertOneCategoriesProducts: actionResolvers.UpsertOneCategoriesProductsResolver
    },
    OrderItem: {
        aggregateOrderItem: actionResolvers.AggregateOrderItemResolver,
        createManyOrderItem: actionResolvers.CreateManyOrderItemResolver,
        createOneOrderItem: actionResolvers.CreateOneOrderItemResolver,
        deleteManyOrderItem: actionResolvers.DeleteManyOrderItemResolver,
        deleteOneOrderItem: actionResolvers.DeleteOneOrderItemResolver,
        findFirstOrderItem: actionResolvers.FindFirstOrderItemResolver,
        findFirstOrderItemOrThrow: actionResolvers.FindFirstOrderItemOrThrowResolver,
        orderItems: actionResolvers.FindManyOrderItemResolver,
        orderItem: actionResolvers.FindUniqueOrderItemResolver,
        getOrderItem: actionResolvers.FindUniqueOrderItemOrThrowResolver,
        groupByOrderItem: actionResolvers.GroupByOrderItemResolver,
        updateManyOrderItem: actionResolvers.UpdateManyOrderItemResolver,
        updateOneOrderItem: actionResolvers.UpdateOneOrderItemResolver,
        upsertOneOrderItem: actionResolvers.UpsertOneOrderItemResolver
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
    }
};
const crudResolversInfo = {
    Address: ["aggregateAddress", "createManyAddress", "createOneAddress", "deleteManyAddress", "deleteOneAddress", "findFirstAddress", "findFirstAddressOrThrow", "addresses", "address", "getAddress", "groupByAddress", "updateManyAddress", "updateOneAddress", "upsertOneAddress"],
    Document: ["aggregateDocument", "createManyDocument", "createOneDocument", "deleteManyDocument", "deleteOneDocument", "findFirstDocument", "findFirstDocumentOrThrow", "documents", "document", "getDocument", "groupByDocument", "updateManyDocument", "updateOneDocument", "upsertOneDocument"],
    Client: ["aggregateClient", "createManyClient", "createOneClient", "deleteManyClient", "deleteOneClient", "findFirstClient", "findFirstClientOrThrow", "clients", "client", "getClient", "groupByClient", "updateManyClient", "updateOneClient", "upsertOneClient"],
    Category: ["aggregateCategory", "createManyCategory", "createOneCategory", "deleteManyCategory", "deleteOneCategory", "findFirstCategory", "findFirstCategoryOrThrow", "categories", "category", "getCategory", "groupByCategory", "updateManyCategory", "updateOneCategory", "upsertOneCategory"],
    Product: ["aggregateProduct", "createManyProduct", "createOneProduct", "deleteManyProduct", "deleteOneProduct", "findFirstProduct", "findFirstProductOrThrow", "products", "product", "getProduct", "groupByProduct", "updateManyProduct", "updateOneProduct", "upsertOneProduct"],
    CategoriesProducts: ["aggregateCategoriesProducts", "createManyCategoriesProducts", "createOneCategoriesProducts", "deleteManyCategoriesProducts", "deleteOneCategoriesProducts", "findFirstCategoriesProducts", "findFirstCategoriesProductsOrThrow", "findManyCategoriesProducts", "findUniqueCategoriesProducts", "findUniqueCategoriesProductsOrThrow", "groupByCategoriesProducts", "updateManyCategoriesProducts", "updateOneCategoriesProducts", "upsertOneCategoriesProducts"],
    OrderItem: ["aggregateOrderItem", "createManyOrderItem", "createOneOrderItem", "deleteManyOrderItem", "deleteOneOrderItem", "findFirstOrderItem", "findFirstOrderItemOrThrow", "orderItems", "orderItem", "getOrderItem", "groupByOrderItem", "updateManyOrderItem", "updateOneOrderItem", "upsertOneOrderItem"],
    Order: ["aggregateOrder", "createManyOrder", "createOneOrder", "deleteManyOrder", "deleteOneOrder", "findFirstOrder", "findFirstOrderOrThrow", "orders", "order", "getOrder", "groupByOrder", "updateManyOrder", "updateOneOrder", "upsertOneOrder"]
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
    AggregateCategoriesProductsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyCategoriesProductsArgs: ["data", "skipDuplicates"],
    CreateOneCategoriesProductsArgs: ["data"],
    DeleteManyCategoriesProductsArgs: ["where"],
    DeleteOneCategoriesProductsArgs: ["where"],
    FindFirstCategoriesProductsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstCategoriesProductsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCategoriesProductsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCategoriesProductsArgs: ["where"],
    FindUniqueCategoriesProductsOrThrowArgs: ["where"],
    GroupByCategoriesProductsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCategoriesProductsArgs: ["data", "where"],
    UpdateOneCategoriesProductsArgs: ["data", "where"],
    UpsertOneCategoriesProductsArgs: ["where", "create", "update"],
    AggregateOrderItemArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyOrderItemArgs: ["data", "skipDuplicates"],
    CreateOneOrderItemArgs: ["data"],
    DeleteManyOrderItemArgs: ["where"],
    DeleteOneOrderItemArgs: ["where"],
    FindFirstOrderItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstOrderItemOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyOrderItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueOrderItemArgs: ["where"],
    FindUniqueOrderItemOrThrowArgs: ["where"],
    GroupByOrderItemArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyOrderItemArgs: ["data", "where"],
    UpdateOneOrderItemArgs: ["data", "where"],
    UpsertOneOrderItemArgs: ["where", "create", "update"],
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
    UpsertOneOrderArgs: ["where", "create", "update"]
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
    CategoriesProducts: relationResolvers.CategoriesProductsRelationsResolver,
    OrderItem: relationResolvers.OrderItemRelationsResolver,
    Order: relationResolvers.OrderRelationsResolver
};
const relationResolversInfo = {
    Address: ["client"],
    Document: ["client"],
    Client: ["document", "address", "Orders"],
    Category: ["produtos"],
    Product: ["categories", "orderItems"],
    CategoriesProducts: ["category", "product"],
    OrderItem: ["product", "order"],
    Order: ["orderItems", "client"]
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
    Product: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price"],
    CategoriesProducts: ["id", "categoryName", "productId"],
    OrderItem: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId"],
    Order: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"]
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
    ProductGroupBy: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateCategoriesProducts: ["_count", "_min", "_max"],
    CategoriesProductsGroupBy: ["id", "categoryName", "productId", "_count", "_min", "_max"],
    AggregateOrderItem: ["_count", "_avg", "_sum", "_min", "_max"],
    OrderItemGroupBy: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateOrder: ["_count", "_avg", "_sum", "_min", "_max"],
    OrderGroupBy: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AddressCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId", "_all"],
    AddressMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    AddressMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    DocumentCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId", "_all"],
    DocumentMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    DocumentMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    ClientCount: ["Orders"],
    ClientCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "_all"],
    ClientMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    ClientMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    CategoryCount: ["produtos"],
    CategoryCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "_all"],
    CategoryMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    CategoryMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    ProductCount: ["categories", "orderItems"],
    ProductCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price", "_all"],
    ProductAvgAggregate: ["inventory_quantity", "price"],
    ProductSumAggregate: ["inventory_quantity", "price"],
    ProductMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price"],
    ProductMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price"],
    CategoriesProductsCountAggregate: ["id", "categoryName", "productId", "_all"],
    CategoriesProductsMinAggregate: ["id", "categoryName", "productId"],
    CategoriesProductsMaxAggregate: ["id", "categoryName", "productId"],
    OrderItemCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId", "_all"],
    OrderItemAvgAggregate: ["amount", "totalPrice"],
    OrderItemSumAggregate: ["amount", "totalPrice"],
    OrderItemMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId"],
    OrderItemMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId"],
    OrderCount: ["orderItems"],
    OrderCountAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId", "_all"],
    OrderAvgAggregate: ["totalPrice"],
    OrderSumAggregate: ["totalPrice"],
    OrderMinAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"],
    OrderMaxAggregate: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"]
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
    ClientWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "document", "address", "Orders"],
    ClientOrderByWithRelationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "document", "address", "Orders"],
    ClientWhereUniqueInput: ["id", "email", "documentId", "addressId", "AND", "OR", "NOT", "createdAt", "deletedAt", "updatedAt", "name", "document", "address", "Orders"],
    ClientOrderByWithAggregationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "_count", "_max", "_min"],
    ClientScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    CategoryWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name", "produtos"],
    CategoryOrderByWithRelationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "produtos"],
    CategoryWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "createdAt", "deletedAt", "updatedAt", "produtos"],
    CategoryOrderByWithAggregationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "_count", "_max", "_min"],
    CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name"],
    ProductWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price", "categories", "orderItems"],
    ProductOrderByWithRelationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price", "categories", "orderItems"],
    ProductWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "createdAt", "deletedAt", "updatedAt", "description", "inventory_quantity", "price", "categories", "orderItems"],
    ProductOrderByWithAggregationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price", "_count", "_avg", "_max", "_min", "_sum"],
    ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price"],
    CategoriesProductsWhereInput: ["AND", "OR", "NOT", "id", "categoryName", "productId", "category", "product"],
    CategoriesProductsOrderByWithRelationInput: ["id", "categoryName", "productId", "category", "product"],
    CategoriesProductsWhereUniqueInput: ["id", "AND", "OR", "NOT", "categoryName", "productId", "category", "product"],
    CategoriesProductsOrderByWithAggregationInput: ["id", "categoryName", "productId", "_count", "_max", "_min"],
    CategoriesProductsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "categoryName", "productId"],
    OrderItemWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId", "product", "order"],
    OrderItemOrderByWithRelationInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId", "product", "order"],
    OrderItemWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId", "product", "order"],
    OrderItemOrderByWithAggregationInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId", "_count", "_avg", "_max", "_min", "_sum"],
    OrderItemScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId"],
    OrderWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId", "orderItems", "client"],
    OrderOrderByWithRelationInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId", "orderItems", "client"],
    OrderWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId", "orderItems", "client"],
    OrderOrderByWithAggregationInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId", "_count", "_avg", "_max", "_min", "_sum"],
    OrderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"],
    AddressCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "client"],
    AddressUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "client"],
    AddressCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery", "clientId"],
    AddressUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery"],
    DocumentCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "client"],
    DocumentUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "client"],
    DocumentCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj", "clientId"],
    DocumentUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj"],
    ClientCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "document", "address", "Orders"],
    ClientUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "document", "address", "Orders"],
    ClientCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    ClientUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    CategoryCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "produtos"],
    CategoryUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "produtos"],
    CategoryCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    CategoryUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    ProductCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price", "categories", "orderItems"],
    ProductUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price", "categories", "orderItems"],
    ProductCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price"],
    ProductUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price"],
    CategoriesProductsCreateInput: ["id", "category", "product"],
    CategoriesProductsUpdateInput: ["id", "category", "product"],
    CategoriesProductsCreateManyInput: ["id", "categoryName", "productId"],
    CategoriesProductsUpdateManyMutationInput: ["id"],
    OrderItemCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "product", "order"],
    OrderItemUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "product", "order"],
    OrderItemCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId"],
    OrderItemUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice"],
    OrderCreateInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "orderItems", "client"],
    OrderUpdateInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "orderItems", "client"],
    OrderCreateManyInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"],
    OrderUpdateManyMutationInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    ClientRelationFilter: ["is", "isNot"],
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
    DocumentNullableRelationFilter: ["is", "isNot"],
    AddressNullableRelationFilter: ["is", "isNot"],
    OrderListRelationFilter: ["every", "some", "none"],
    OrderOrderByRelationAggregateInput: ["_count"],
    ClientCountOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    ClientMaxOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    ClientMinOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId"],
    CategoriesProductsListRelationFilter: ["every", "some", "none"],
    CategoriesProductsOrderByRelationAggregateInput: ["_count"],
    CategoryCountOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    CategoryMaxOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    CategoryMinOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    OrderItemListRelationFilter: ["every", "some", "none"],
    OrderItemOrderByRelationAggregateInput: ["_count"],
    ProductCountOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price"],
    ProductAvgOrderByAggregateInput: ["inventory_quantity", "price"],
    ProductMaxOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price"],
    ProductMinOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price"],
    ProductSumOrderByAggregateInput: ["inventory_quantity", "price"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    CategoryRelationFilter: ["is", "isNot"],
    ProductRelationFilter: ["is", "isNot"],
    CategoriesProductsCountOrderByAggregateInput: ["id", "categoryName", "productId"],
    CategoriesProductsMaxOrderByAggregateInput: ["id", "categoryName", "productId"],
    CategoriesProductsMinOrderByAggregateInput: ["id", "categoryName", "productId"],
    OrderRelationFilter: ["is", "isNot"],
    OrderItemCountOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId"],
    OrderItemAvgOrderByAggregateInput: ["amount", "totalPrice"],
    OrderItemMaxOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId"],
    OrderItemMinOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId"],
    OrderItemSumOrderByAggregateInput: ["amount", "totalPrice"],
    OrderCountOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"],
    OrderAvgOrderByAggregateInput: ["totalPrice"],
    OrderMaxOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"],
    OrderMinOrderByAggregateInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"],
    OrderSumOrderByAggregateInput: ["totalPrice"],
    ClientCreateNestedOneWithoutAddressInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    ClientUpdateOneRequiredWithoutAddressNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ClientCreateNestedOneWithoutDocumentInput: ["create", "connectOrCreate", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    ClientUpdateOneRequiredWithoutDocumentNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    DocumentCreateNestedOneWithoutClientInput: ["create", "connectOrCreate", "connect"],
    AddressCreateNestedOneWithoutClientInput: ["create", "connectOrCreate", "connect"],
    OrderCreateNestedManyWithoutClientInput: ["create", "connectOrCreate", "createMany", "connect"],
    DocumentUpdateOneWithoutClientNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    AddressUpdateOneWithoutClientNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    OrderUpdateManyWithoutClientNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CategoriesProductsCreateNestedManyWithoutCategoryInput: ["create", "connectOrCreate", "createMany", "connect"],
    CategoriesProductsUpdateManyWithoutCategoryNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CategoriesProductsCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
    OrderItemCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    CategoriesProductsUpdateManyWithoutProductNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    OrderItemUpdateManyWithoutProductNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CategoryCreateNestedOneWithoutProdutosInput: ["create", "connectOrCreate", "connect"],
    ProductCreateNestedOneWithoutCategoriesInput: ["create", "connectOrCreate", "connect"],
    CategoryUpdateOneRequiredWithoutProdutosNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ProductUpdateOneRequiredWithoutCategoriesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ProductCreateNestedOneWithoutOrderItemsInput: ["create", "connectOrCreate", "connect"],
    OrderCreateNestedOneWithoutOrderItemsInput: ["create", "connectOrCreate", "connect"],
    ProductUpdateOneRequiredWithoutOrderItemsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    OrderUpdateOneRequiredWithoutOrderItemsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    OrderItemCreateNestedManyWithoutOrderInput: ["create", "connectOrCreate", "createMany", "connect"],
    ClientCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
    OrderItemUpdateManyWithoutOrderNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ClientUpdateOneRequiredWithoutOrdersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
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
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    ClientCreateWithoutAddressInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "document", "Orders"],
    ClientCreateOrConnectWithoutAddressInput: ["where", "create"],
    ClientUpsertWithoutAddressInput: ["update", "create", "where"],
    ClientUpdateToOneWithWhereWithoutAddressInput: ["where", "data"],
    ClientUpdateWithoutAddressInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "document", "Orders"],
    ClientCreateWithoutDocumentInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "address", "Orders"],
    ClientCreateOrConnectWithoutDocumentInput: ["where", "create"],
    ClientUpsertWithoutDocumentInput: ["update", "create", "where"],
    ClientUpdateToOneWithWhereWithoutDocumentInput: ["where", "data"],
    ClientUpdateWithoutDocumentInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "address", "Orders"],
    DocumentCreateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj"],
    DocumentCreateOrConnectWithoutClientInput: ["where", "create"],
    AddressCreateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery"],
    AddressCreateOrConnectWithoutClientInput: ["where", "create"],
    OrderCreateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "orderItems"],
    OrderCreateOrConnectWithoutClientInput: ["where", "create"],
    OrderCreateManyClientInputEnvelope: ["data", "skipDuplicates"],
    DocumentUpsertWithoutClientInput: ["update", "create", "where"],
    DocumentUpdateToOneWithWhereWithoutClientInput: ["where", "data"],
    DocumentUpdateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "cpf", "cnpj"],
    AddressUpsertWithoutClientInput: ["update", "create", "where"],
    AddressUpdateToOneWithWhereWithoutClientInput: ["where", "data"],
    AddressUpdateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "billing", "delivery"],
    OrderUpsertWithWhereUniqueWithoutClientInput: ["where", "update", "create"],
    OrderUpdateWithWhereUniqueWithoutClientInput: ["where", "data"],
    OrderUpdateManyWithWhereWithoutClientInput: ["where", "data"],
    OrderScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "clientId"],
    CategoriesProductsCreateWithoutCategoryInput: ["id", "product"],
    CategoriesProductsCreateOrConnectWithoutCategoryInput: ["where", "create"],
    CategoriesProductsCreateManyCategoryInputEnvelope: ["data", "skipDuplicates"],
    CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput: ["where", "update", "create"],
    CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput: ["where", "data"],
    CategoriesProductsUpdateManyWithWhereWithoutCategoryInput: ["where", "data"],
    CategoriesProductsScalarWhereInput: ["AND", "OR", "NOT", "id", "categoryName", "productId"],
    CategoriesProductsCreateWithoutProductInput: ["id", "category"],
    CategoriesProductsCreateOrConnectWithoutProductInput: ["where", "create"],
    CategoriesProductsCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
    OrderItemCreateWithoutProductInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "order"],
    OrderItemCreateOrConnectWithoutProductInput: ["where", "create"],
    OrderItemCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
    CategoriesProductsUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
    CategoriesProductsUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
    CategoriesProductsUpdateManyWithWhereWithoutProductInput: ["where", "data"],
    OrderItemUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
    OrderItemUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
    OrderItemUpdateManyWithWhereWithoutProductInput: ["where", "data"],
    OrderItemScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId", "orderId"],
    CategoryCreateWithoutProdutosInput: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    CategoryCreateOrConnectWithoutProdutosInput: ["where", "create"],
    ProductCreateWithoutCategoriesInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price", "orderItems"],
    ProductCreateOrConnectWithoutCategoriesInput: ["where", "create"],
    CategoryUpsertWithoutProdutosInput: ["update", "create", "where"],
    CategoryUpdateToOneWithWhereWithoutProdutosInput: ["where", "data"],
    CategoryUpdateWithoutProdutosInput: ["id", "createdAt", "deletedAt", "updatedAt", "name"],
    ProductUpsertWithoutCategoriesInput: ["update", "create", "where"],
    ProductUpdateToOneWithWhereWithoutCategoriesInput: ["where", "data"],
    ProductUpdateWithoutCategoriesInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price", "orderItems"],
    ProductCreateWithoutOrderItemsInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price", "categories"],
    ProductCreateOrConnectWithoutOrderItemsInput: ["where", "create"],
    OrderCreateWithoutOrderItemsInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "client"],
    OrderCreateOrConnectWithoutOrderItemsInput: ["where", "create"],
    ProductUpsertWithoutOrderItemsInput: ["update", "create", "where"],
    ProductUpdateToOneWithWhereWithoutOrderItemsInput: ["where", "data"],
    ProductUpdateWithoutOrderItemsInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "description", "inventory_quantity", "price", "categories"],
    OrderUpsertWithoutOrderItemsInput: ["update", "create", "where"],
    OrderUpdateToOneWithWhereWithoutOrderItemsInput: ["where", "data"],
    OrderUpdateWithoutOrderItemsInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "client"],
    OrderItemCreateWithoutOrderInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "product"],
    OrderItemCreateOrConnectWithoutOrderInput: ["where", "create"],
    OrderItemCreateManyOrderInputEnvelope: ["data", "skipDuplicates"],
    ClientCreateWithoutOrdersInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "document", "address"],
    ClientCreateOrConnectWithoutOrdersInput: ["where", "create"],
    OrderItemUpsertWithWhereUniqueWithoutOrderInput: ["where", "update", "create"],
    OrderItemUpdateWithWhereUniqueWithoutOrderInput: ["where", "data"],
    OrderItemUpdateManyWithWhereWithoutOrderInput: ["where", "data"],
    ClientUpsertWithoutOrdersInput: ["update", "create", "where"],
    ClientUpdateToOneWithWhereWithoutOrdersInput: ["where", "data"],
    ClientUpdateWithoutOrdersInput: ["id", "createdAt", "deletedAt", "updatedAt", "name", "email", "documentId", "addressId", "document", "address"],
    OrderCreateManyClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice"],
    OrderUpdateWithoutClientInput: ["id", "createdAt", "deletedAt", "updatedAt", "totalPrice", "orderItems"],
    CategoriesProductsCreateManyCategoryInput: ["id", "productId"],
    CategoriesProductsUpdateWithoutCategoryInput: ["id", "product"],
    CategoriesProductsCreateManyProductInput: ["id", "categoryName"],
    OrderItemCreateManyProductInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "orderId"],
    CategoriesProductsUpdateWithoutProductInput: ["id", "category"],
    OrderItemUpdateWithoutProductInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "order"],
    OrderItemCreateManyOrderInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "productId"],
    OrderItemUpdateWithoutOrderInput: ["id", "createdAt", "deletedAt", "updatedAt", "amount", "totalPrice", "product"]
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
