import { CategoriesProductsCreateManyCategoryInputEnvelope } from "../inputs/CategoriesProductsCreateManyCategoryInputEnvelope";
import { CategoriesProductsCreateOrConnectWithoutCategoryInput } from "../inputs/CategoriesProductsCreateOrConnectWithoutCategoryInput";
import { CategoriesProductsCreateWithoutCategoryInput } from "../inputs/CategoriesProductsCreateWithoutCategoryInput";
import { CategoriesProductsWhereUniqueInput } from "../inputs/CategoriesProductsWhereUniqueInput";
export declare class CategoriesProductsCreateNestedManyWithoutCategoryInput {
    create?: CategoriesProductsCreateWithoutCategoryInput[] | undefined;
    connectOrCreate?: CategoriesProductsCreateOrConnectWithoutCategoryInput[] | undefined;
    createMany?: CategoriesProductsCreateManyCategoryInputEnvelope | undefined;
    connect?: CategoriesProductsWhereUniqueInput[] | undefined;
}
